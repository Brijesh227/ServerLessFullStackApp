import express from "express";
// const { loginHandler } = require('./login/index');
import registerUserHandler from "./registerRoute";
const router: express.Router = express.Router();

router.post("/register", registerUserHandler);
// router.post("/login", loginHandler);

export default router;