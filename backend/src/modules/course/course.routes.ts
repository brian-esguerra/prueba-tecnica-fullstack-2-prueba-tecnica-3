import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { allowRoles } from "../../middlewares/roles.middleware";
import { CourseController } from "./course.controller";
import { validate } from "../../middlewares/validate.middleware";
import { createCourseSchema } from "./course.schema";

const router = Router();

// Crear curso (Admin, Teacher)
router.post("/", authMiddleware, allowRoles("Admin", "Teacher"), validate(createCourseSchema), CourseController.create);

// Obtener curso por ID (todos)
router.get("/:id", authMiddleware, CourseController.getOne);

// Listar cursos con paginación (todos)
router.get("/", authMiddleware, CourseController.getAll);

// Actualizar curso (Admin, Teacher)
router.put("/:id", authMiddleware, allowRoles("Admin", "Teacher"), CourseController.update);

// Eliminar curso (Admin)
router.delete("/:id", authMiddleware, allowRoles("Admin"), CourseController.delete);

export default router;
