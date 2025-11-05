import { prisma } from "../../config/prisma";
import { generateToken } from "../../config/jwt";
import { comparePassword, hashPassword } from "../../utils/password";

export class AuthService {

  // Service: Registrar Usuario
  static async registerUser(data: {
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
        role: data.role,
        createdAt: Date.now()
      }
    });

    const token = generateToken({ id: user.id, role: user.role });

    return { 
      message: "Usuario registrado exitosamente",
      user,
      token 
    };
  }

  // Servicio: Login
  static async login(data: { email: string; password: string }) {
    // Buscar usuario por email
    const user = await prisma.user.findFirst({
      where: { email: data.email }
    });

    if (!user) {
      throw new Error("Credenciales incorrectas");
    }

    // Comparar contraseña
    const isValidPassword = await comparePassword(data.password, user.password);
    if (!isValidPassword) {
      throw new Error("Credenciales incorrectas");
    }

    // Generar token con ID y rol
    const token = generateToken({ id: user.id, role: user.role });

    return {
      message: "Usuario logueado",
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role
      },
      token
    };
  }
}
