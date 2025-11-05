import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "2ALF034198";
const EXPIRES_IN = "8h"; // duración del token

export function generateToken(payload: object): string {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRES_IN });
}

export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
}