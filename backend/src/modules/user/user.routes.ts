import { Router } from "express";
import { UserController } from "./user.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { allowRoles } from "../../middlewares/roles.middleware";

const router = Router();

/**
 * Listar todos los usuario con paginación
 * GET /users/
 */
router.get("/", authMiddleware, allowRoles("Admin","Teacher"), UserController.list);


export default router;
