import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import * as userController from '../controllers/userController.js';
import { userSchema } from "../schemas/userSchema.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";


const userRouter = Router();

userRouter.post("/users",validateSchemaMiddleware(userSchema),userController.signUp);
userRouter.get("/users",ensureAuthenticatedMiddleware)


export default userRouter;