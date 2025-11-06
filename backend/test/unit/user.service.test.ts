import { UserService } from "../../src/modules/user/user.service";
import { prisma } from "../../src/config/prisma";

jest.mock("../../src/config/prisma", () => ({
  prisma: {
    user: {
      findFirst: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      count: jest.fn(),
      findMany: jest.fn()
    }
  }
}));

describe("UserService", () => {
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  // ---------------- CREATE USER ----------------
  describe("createUser", () => {
    test("Debe crear usuario correctamente si no existe email ni idNumber", async () => {
      (prisma.user.findFirst as jest.Mock).mockResolvedValue(null);
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);
      (prisma.user.create as jest.Mock).mockResolvedValue({
        id: 1,
        fullName: "Brian",
        email: "test@test.com"
      });

      const result = await UserService.createUser({
        fullName: "Brian",
        email: "test@test.com",
        password: "123456",
        idType: "CC",
        idNumber: "999",
        role: "Student"
      });

      expect(prisma.user.create).toHaveBeenCalled();
      expect(result.message).toBe("Usuario registrado exitosamente");
      expect(result.user.id).toBe(1);
    });

    test("Debe lanzar error si el email ya existe", async () => {
      (prisma.user.findFirst as jest.Mock).mockResolvedValue({ id: 1 });

      await expect(UserService.createUser({
        fullName: "Brian",
        email: "test@test.com",
        password: "123456",
        idType: "CC",
        idNumber: "999",
        role: "Student"
      })).rejects.toThrow("El email ya está registrado");
    });
  });

   // ---------------- GET USER BY ID ----------------
   describe("getUserById", () => {
    test("Debe retornar usuario si existe", async () => {
      (prisma.user.findUnique as jest.Mock).mockResolvedValue({ id: 1, fullName: "Brian" });

      const result = await UserService.getUserById(1);
      expect(result).toEqual({ id: 1, fullName: "Brian" });
    });

    test("Debe lanzar error si no existe usuario", async () => {
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(UserService.getUserById(1)).rejects.toThrow("Usuario no encontrado");
    });
  });

   // ---------------- UPDATE USER ----------------
   describe("updateUser", () => {
    test("Debe permitir update si es admin", async () => {
      (prisma.user.update as jest.Mock).mockResolvedValue({ id: 1, fullName: "Camila" });

      const result = await UserService.updateUser(1, { fullName: "Camila" }, { id: 99, role: "Admin" });

      expect(prisma.user.update).toHaveBeenCalled();
      expect(result.fullName).toBe("Camila");
    });

    test("Debe evitar update si no es admin ni el mismo usuario", async () => {
      await expect(
        UserService.updateUser(1, { fullName: "Camila" }, { id: 2, role: "Student" })
      ).rejects.toThrow("No tienes permisos");
    });
  });

  // ---------------- DELETE USER ----------------
  describe("deleteUser", () => {
    test("Debe eliminar usuario si existe", async () => {
      (prisma.user.findFirst as jest.Mock).mockResolvedValue({ id: 1 });
      (prisma.user.delete as jest.Mock).mockResolvedValue({ id: 1 });

      const result = await UserService.deleteUser(1);
      expect(result.id).toBe(1);
    });

    test("Debe lanzar error si el usuario no existe", async () => {
      (prisma.user.findFirst as jest.Mock).mockResolvedValue(null);

      await expect(UserService.deleteUser(1)).rejects.toThrow("No existe el identificador");
    });
  });

  // ---------------- GET USERS (LIST) ----------------
  describe("getUsers", () => {
    test("Debe listar usuarios con paginación", async () => {
      (prisma.user.findMany as jest.Mock).mockResolvedValue([{ id: 1 }]);
      (prisma.user.count as jest.Mock).mockResolvedValue(1);

      const result = await UserService.getUsers({ page: "1", limit: "10" });

      expect(result.items.length).toBe(1);
      expect(result.total).toBe(1);
      expect(result.page).toBe(1);
    });
  });

});