import { prisma } from "../../config/prisma";

export class CourseUserService {
  
  // Service: create assing
  static async enrollUser(courseId: number, userId: number, requester: any) {
    // verificar curso
    const course = await prisma.course.findUnique({ where: { id: courseId } });
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user || !course) {
      throw new Error("Usuario o Curso no encontrado");
    }

    // Teacher solo pueden inscribir estudiantes en cursos que ellos dictan
    if (requester.role === "Teacher") {
      if (course.professorId !== requester.id) throw new Error("No puedes inscribir usuarios en este curso");
    }

    // Validar si ya está inscrito
    const exists = await prisma.courseUser.findFirst({
      where: { courseId, userId }
    });
    if (exists) throw new Error("El usuario ya está inscrito en este curso");

    const assing = await prisma.courseUser.create({
      data: {
        userId,
        courseId,
        enrolledAt: Date.now()
      }
    });

    return {
      message: "Usuario inscrito",
      assing
    };
  }

  static async getStudents(courseId: number) {
    if (!courseId) throw new Error("Parametro incorrecto (Id)");

    const list = await prisma.courseUser.findMany({
      where: { courseId },
      select: {
        id: true,
        enrolledAt: true,
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
            role: true,
            createdAt: true,
          },
        },
      },
    });

    return list;
  }
}
