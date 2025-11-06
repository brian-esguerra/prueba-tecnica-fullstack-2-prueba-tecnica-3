import { prisma } from "../../config/prisma";
import { hashPassword } from "../../utils/password";
import { Role } from ".prisma/client";

export class UserService {
 
  // Service: create user
  static async createUser(data: {
    fullName: string;
    email: string;
    password: string;
    idType: string;
    idNumber: string;
    role: string;
  }) {
    // Verificar si ya existe el email
    const userExists = await prisma.user.findFirst({
      where: { email: data.email }
    });

    if (userExists) {
      throw new Error("El email ya está registrado");
    }

    // Verificar si el idNumber ya existe
    const existingId = await prisma.user.findUnique({
      where: { idNumber: data.idNumber },
    });

    if (existingId) {
      throw new Error("El número de identificación ya está registrado");
    }

    // Hashear contraseña
    const hashedPassword = await hashPassword(data.password);

    // Crear usuario
    const user = await prisma.user.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        password: hashedPassword,
        idType: data.idType,
        idNumber: data.idNumber,
        role: data.role as Role,
        createdAt: Date.now()
      }
    });
  
    return { 
      message: "Usuario registrado exitosamente",
      user
    };
  }

  // service: Get user by ID
  static async getUserById(id: number) {
    if (!id) throw new Error("Parametro incorrecto (Id)");
    const user = await prisma.user.findUnique({ 
      where: { id },
      include: {
        enrolledCourses: {
          include: {
            course: true
          }
        }
      }
    });

    if(!user) throw new Error("Usuario no encontrado");

    return user
  }

  // service: update user
  static async updateUser(id: number, data: any, requester: any) {
    // Solo Admin o el mismo usuario
    if (requester.role !== "Admin" && requester.id !== id) {
      throw new Error("No tienes permisos");
    }

    if (data.password) data.password = await hashPassword(data.password);

    return prisma.user.update({
      where: { id },
      data
    });
  }

  // Service: Get List
  static async getUsers(query: any) {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const role = query.role || undefined;

    const skip = (page - 1) * limit;

    const where: any = {};
    if (role) where.role = role;

    const [items, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take: limit,
        select: {
          id: true,
          fullName: true,
          email: true,
          role: true,
          idType: true,
          idNumber: true,
          createdAt: true
        }
      }),
      prisma.user.count({ where })
    ]);

    return { items, total, page, limit };
  }

  // Service: delete user byID
  static async deleteUser(id: number) {
    // validar id
    if (!id) throw new Error("Parametro incorrecto (Id)");

    // Verificar si ya existe el id
    const userExists = await prisma.user.findFirst({
      where: { id }
    });

    if (!userExists) {
      throw new Error("No existe el identificador");
    }

    return prisma.user.delete({ where: { id } });
  }
}