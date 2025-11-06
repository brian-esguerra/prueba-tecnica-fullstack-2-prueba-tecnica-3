import { Router } from "express";
import { UserController } from "./user.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { allowRoles } from "../../middlewares/roles.middleware";

const router = Router();

// Crear usuario (solo Admin, Teacher)
router.post("/", authMiddleware, allowRoles("Admin", "Teacher"), UserController.create);

// Obtener todos (solo Admin, Teacher)
router.get("/", authMiddleware, allowRoles("Admin", "Teacher"), UserController.getAll);

// Obtener usuario por ID (todos los roles)
router.get("/:id", authMiddleware, UserController.getOne);

// Actualizar usuario (Admin o el mismo usuario)
router.put("/:id", authMiddleware, UserController.update);

// Eliminar usuario (solo Admin)
router.delete("/:id", authMiddleware, allowRoles("Admin", "Teacher"), UserController.delete);

export default router;
