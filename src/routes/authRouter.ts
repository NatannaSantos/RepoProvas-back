import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import * as userController from '../controllers/userController.js';
import { userSchema } from "../schemas/userSchema.js";


const authRouter = Router();

authRouter.post("/signIn",validateSchemaMiddleware(userSchema),
userController.signIn)

export default authRouter;