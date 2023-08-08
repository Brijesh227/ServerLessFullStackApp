import { Request, Response, NextFunction } from "express";
import errorGenerator from "../../utility/errorgenerator";
import User from "../../models/userSchema";
import registerUser from "../../services/auth/register";

const registerHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        console.log('lol register');
        const { userName, password } = req.body;
        if (!userName || !password) {
            return errorGenerator(res, 400, "username or password are not provided.")
        }

        const registeredUser = await registerUser(userName, password);         
        const newUser = await User.create({
            "username": registeredUser?.userName,
            "password": registeredUser?.email
        })
        console.log('newuser', newUser);
        res.status(200).send(`${newUser.username} created successfully`);
    } catch (err) {
        return errorGenerator(res, 500);
    }
}

export default registerHandler;