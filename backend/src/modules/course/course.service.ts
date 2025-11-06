import { prisma } from "../../config/prisma";

export class CourseService {

  // Service: create course
  static async createCourse(data: any, requester: any) {
    console.log("data course:", data);
    // Admin puede asignar cualquier profesor
    // Teacher solo puede asignarse a sí mismo
    if (requester.role === "Teacher") {
      data.professorId = requester.id;
    }
    // Verificar si ya existe el name
    const courseExists = await prisma.course.findFirst({
      where: { name: data.name }
    });

    if (courseExists) {
      throw new Error("El nombre ya existe");
    }

    data.createdAt = Date.now();
    // register course
    const course = await prisma.course.create({ data });

    return {
      message: "Curso registrado exitosamente",
      course
    }; 
  }

  // Service: get course by ID
  static async getCourseById(id: number) {
    if (!id) throw new Error("Parametro incorrecto (Id)");
    const course = await prisma.course.findUnique({
      where: { id },
      include: {
        professor: { select: { id: true, fullName: true, email: true } }
      }
    });

    if(!course) throw new Error("Curso no encontrado");

    return course
  }

  // Service: get List
  static async getCourses(query: any) {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const category = query.category || undefined;

    const skip = (page - 1) * limit;
    const where: any = {};
    if (category) where.category = category;

    const [items, total] = await Promise.all([
      prisma.course.findMany({
        where,
        skip,
        take: limit,
        include: {
          professor: { select: { id: true, fullName: true } }
        }
      }),
      prisma.course.count({ where })
    ]);

    return { items, total, page, limit,};
  }

  //Service: update course
  static async updateCourse(id: number, data: any, requester: any) {
    if (!id) throw new Error("Parametro incorrecto (Id)");
    
    const course = await prisma.course.findUnique({ where: { id } });
    if (!course) throw new Error("Curso no encontrado");

    // Teacher solo puede actualizar si es el profesor del curso
    if (requester.role === "Teacher" && requester.id !== course.professorId) {
      throw new Error("No tienes permisos para actualizar este curso");
    }

    if (data.professorId && requester.role === "Teacher") {
      throw new Error("No puedes reasignar profesor");
    }

    return prisma.course.update({
      where: { id },
      data
    });
  }

  // Service: delete course byID
  static async deleteCourse(id: number) {
    // validar id
    if (!id) throw new Error("Parametro incorrecto (Id)");

    // Verificar si ya existe el id
    const courseExists = await prisma.course.findFirst({
      where: { id }
    });

    if (!courseExists) {
      throw new Error("No existe el identificador");
    }

    return prisma.course.delete({ where: { id } });
  }

}