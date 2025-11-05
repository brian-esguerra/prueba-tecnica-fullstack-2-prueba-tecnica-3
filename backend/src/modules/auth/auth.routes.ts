import { Router } from "express";
import { AuthController } from "./auth.controller";
import { validate } from "../../middlewares/validate.middleware";
import { registerUserSchema, loginSchema } from "./auth.schema";

const router = Router();

// SignUp: POST
router.post("/signup", validate(registerUserSchema), AuthController.registerUser);
// Login: POST
router.post("/login", validate(loginSchema), AuthController.login);

export default router;
