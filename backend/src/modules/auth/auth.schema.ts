import { z } from "zod";

export const registerUserSchema = z.object({
  fullName: z.string().min(3, "El nombre es obligatorio"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  idType: z.string().min(2, "Tipo de documento requerido"),
  idNumber: z.string().min(4, "Número de documento requerido"),
  role: z.enum(["Admin", "Student", "Teacher"])
});

export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "La contraseña es obligatoria"),
});