import { Request, Response, NextFunction } from "express";
import errorGenerator from "../../utility/errorgenerator";
import User from "../../models/userSchema";
import verifyUser from "../../services/auth/verifyUser";

const verifyUserHandler = async (req: Request, res: Response, next: NextFunction): Promise< Response > => {
    console.log("lol herr verify");
    try {
        const { code, userName } = req.body;
        if (!code) {
            return errorGenerator(res, 400, "code is not provided.")
        }

        const isVerified = await verifyUser(code, userName);

        // const newUser = await User.create({
        //     "username": registeredUser?.getUsername(),
        //     "email": registeredUser?.getUsername()
        // })
        console.log('user verification', isVerified);
        return res.status(200).send(`verified successfully`);
    } catch (error: any) {
        console.log("error while creating user", error);
        return errorGenerator(res, 500, `${error?.message}`);
    }
}

export default verifyUserHandler;