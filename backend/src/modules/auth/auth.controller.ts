import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  static async registerUser(req: Request, res: Response) {
    try {
      const result = await AuthService.registerUser(req.body);
      return res.json(result);
    } catch (err: any) {
      // return res.status(400).json({ error: error.message });
      res.status(400).json({ error: "Error en signup", details: err.message });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const result = await AuthService.login(req.body);
      return res.json(result);
    } catch (err: any) {
      res.status(400).json({ error: "Error en login", details: err.message });
    }
  }

}
