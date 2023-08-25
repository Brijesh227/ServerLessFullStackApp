import { Request, Response, NextFunction } from "express";
import errorGenerator from "../../utility/errorgenerator";
import User from "../../models/userSchema";
import verifyUser from "../../services/auth/verifyUser";

const verifyUserHandler = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
        const { code, userName } = req.body;
        if (!code) {
            return errorGenerator(res, 400, "code is not provided.")
        }

        await verifyUser(code, userName);
        const user = await User.findOne({
            email : userName
        });

        if(!user) {
            return errorGenerator(res, 500, `user not found`);
        } else {
            user.isVerified = true;
            await user.save();
            console.log('user verification successfully');
            return res.status(200).send(`verified successfully`);
        }
    } catch (error: any) {
        console.log("error while creating user", error);
        return errorGenerator(res, 500, `${error?.message}`);
    }
}

export default verifyUserHandler;