import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { allowRoles } from "../../middlewares/roles.middleware";
import { CourseUserController } from "./courseUser.controller";

const router = Router();

// Inscribir usuario en curso (Todos)
router.post("/", authMiddleware, CourseUserController.enroll);

// Listar estudiantes del curso (Todos)
router.get("/:courseId", authMiddleware, CourseUserController.listStudents);

export default router;
