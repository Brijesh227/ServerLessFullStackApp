import express from "express";
import registerUserHandler from "./registerRoute";
import verifyUserHandler from "./verifyUserRoute";
import loginHandler from "./loginRoute";
const router: express.Router = express.Router();

router.post("/register", registerUserHandler);
router.post("/verifyuser", verifyUserHandler);
router.post("/login", loginHandler);

export default router;