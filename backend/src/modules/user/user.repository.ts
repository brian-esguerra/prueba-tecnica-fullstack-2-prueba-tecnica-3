import { prisma } from "../../config/prisma";

export class UserRepository {
  static async findAll({ role, page, limit }: {
    role?: string;
    page: number;
    limit: number;
  }) {
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
}
