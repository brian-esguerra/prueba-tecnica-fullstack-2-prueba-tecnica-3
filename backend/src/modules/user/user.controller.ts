import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {

  // Get list users
  static async list(req: Request, res: Response) {
    try {
      const result = await UserService.listUsers(req.query);
      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  // get user by ID
}