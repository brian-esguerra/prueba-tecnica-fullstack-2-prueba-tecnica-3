import { z } from "zod";

export const createCourseSchema = z.object({
  name: z.string().min(3, "El nombre del curso es obligatorio"),
  image: z.string().url("La imagen debe ser una URL válida").optional().nullable(),
  description: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  level: z.enum(["Básico", "Intermedio", "Avanzado"]),
  
  professorId: z.coerce.number().optional(),
  startDate: z.coerce.number().min(1, "Debe enviar una fecha válida (timestamp)"),
  status: z.enum(["Abierto", "Finalizado"])
});