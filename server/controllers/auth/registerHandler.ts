import { Request, Response, NextFunction } from "express";
import errorGenerator from "../../utility/errorgenerator";
import User from "../../models/userSchema";
import registerUser from "../../services/auth/register";

const registerHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { userName, password } = req.body;
        if (!userName || !password) {
            return errorGenerator(res, 400, "username or password are not provided.")
        }

        const registeredUser = await registerUser(userName, password);
        console.log('registeredUser', registeredUser);

        const newUser = await User.create({
            "username": registeredUser?.getUsername(),
            "email": registeredUser?.getUsername()
        })
        console.log('user in database', newUser);
        res.status(200).send(`${newUser.username} created successfully`);
    } catch (error: any) {
        console.log("error while creating user", error);
        return errorGenerator(res, 500, `${error?.message}`);
    }
}

export default registerHandler;