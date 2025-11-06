import { Request, Response } from "express";
import { CourseService } from "./course.service";

export class CourseController {
  
  // create course
  static async create(req: Request, res: Response) {
    try {
      const course = await CourseService.createCourse(req.body, (req as any).user);
      res.json(course);
    } catch (err: any) {
      res.status(400).json({ error: "Error al crear curso", details: err.message });
    }
  }

  // GET coursr by ID
  static async getOne(req: Request, res: Response) {
    try {
      const course = await CourseService.getCourseById(Number(req.params.id));
      res.json(course);  
    } catch (err: any) {
      res.status(400).json({ error: "Error al obtener curso", details: err.message });
    }
  }

  // Get list course
  static async getAll(req: Request, res: Response) {
    try {
      const result = await CourseService.getCourses(req.query);
      return res.json(result);
    } catch (err: any) {
      res.status(400).json({ error: "Error en obtener listado", details: err.message });
    }
  }

  // PUT update course
  static async update(req: Request, res: Response) {
    try {
      const result = await CourseService.updateCourse(
        Number(req.params.id),
        req.body,
        (req as any).user
      );
      return res.json({
        message: "Curso actualizado correctamente",
        user: result,
      });
    } catch (err: any) {
      res.status(403).json({ error: "Error al actualizar curso", details: err.message });
    }
  }

  // delete course by ID
  static async delete(req: Request, res: Response) {
    try {
      await CourseService.deleteCourse(Number(req.params.id));
      res.json({ message: "Curso eliminado" });
    } catch (err: any) {
      res.status(400).json({ error: "Error en eliminar curso", details: err.message });
    }
  }

}