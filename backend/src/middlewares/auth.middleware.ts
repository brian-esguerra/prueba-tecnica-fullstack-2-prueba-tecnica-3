import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../config/jwt";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token requerido" });

  try {
    const decoded = verifyToken(token);
    req.user = decoded as any;
    next();
  } catch {
    return res.status(401).json({ error: "Token invalido o expirado" });
  }
};
