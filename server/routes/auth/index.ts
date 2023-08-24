import express from "express";
// const { loginHandler } = require('./login/index');
import registerUserHandler from "./registerRoute";
import verifyUserHandler from "./verifyUserRoute";
const router: express.Router = express.Router();

router.post("/register", registerUserHandler);
router.post("/verifyuser", verifyUserHandler);
// router.post("/login", loginHandler);

export default router;