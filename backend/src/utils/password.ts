import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

// Hashear contraseña
export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, SALT_ROUNDS);
}

// Comparar contraseña
export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}