import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {

  // Get list users
  static async getAll(req: Request, res: Response) {
    try {
      const result = await UserService.getUsers(req.query);
      return res.json(result);
    } catch (err: any) {
      res.status(400).json({ error: "Error en obtener listado", details: err.message });
    }
  }

  // create user
  static async create(req: Request, res: Response) {
    try {
      const result = await UserService.createUser(req.body);
      return res.json(result);
    } catch (err: any) {
      res.status(400).json({ error: "Error al crear usuario", details: err.message });
    }
  }

  // get user by ID
  static async getOne(req: Request, res: Response) {
    try {
      const user = await UserService.getUserById(Number(req.params.id));
      res.json(user);
    } catch (err: any) {
      res.status(400).json({ error: "Error en obtener usuario", details: err.message });
    }
  }

  // update user by ID
  static async update(req: Request, res: Response) {
    try {
      const result = await UserService.updateUser(
        Number(req.params.id),
        req.body,
        (req as any).user
      );
      
      return res.json({
        message: "Usuario actualizado correctamente",
        user: result,
      });
    } catch (err: any) {
      res.status(403).json({ error: "Error al actualizar usuario", details: err.message });
    }
  }

  // delete user by ID
  static async delete(req: Request, res: Response) {
    try {
      await UserService.deleteUser(Number(req.params.id));
      res.json({ message: "Usuario eliminado" });
    } catch (err: any) {
      res.status(400).json({ error: "Error en eliminar usuario", details: err.message });
    }
  }

}