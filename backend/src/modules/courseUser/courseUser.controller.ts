import { Request, Response } from "express";
import { CourseUserService } from "./courseUser.service";

export class CourseUserController {

  // create assign
  static async enroll(req: Request, res: Response) {
    try {
      const { courseId } = req.body;
      const { userId } = req.body;

      const result = await CourseUserService.enrollUser(
        Number(courseId),
        Number(userId),
        (req as any).user
      );

      return res.json(result);
    } catch (err: any) {
      res.status(400).json({ error: "Error al inscribir usuario", details: err.message });
    }
  }

  // get list user assign
  static async listStudents(req: Request, res: Response) {
    try {
      const { courseId } = req.params;
      const students = await CourseUserService.getStudents(Number(courseId));
      return res.json(students);
    } catch (err: any) {
      res.status(400).json({ error: "Error al obtener asignaciones", details: err.message });
    }
  }
}
