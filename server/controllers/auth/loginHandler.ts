import { Request, Response, NextFunction } from "express";
import errorGenerator from "../../utility/errorgenerator";
import User from "../../models/userSchema";
import loginUser from "../../services/auth/login";

const loginHandler = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
        const { userName, password } = req.body;
        if (!userName || !password) {
            return errorGenerator(res, 400, "username or password are not provided.")
        }

        const loggedInUser = await loginUser(userName, password);
        console.log("loggedIn User", loggedInUser);

        return res.status(200).send(`login successfully`);
    } catch (error: any) {
        console.log("error while creating user", error);
        return errorGenerator(res, 500, `${error?.message}`);
    }
}

export default loginHandler;