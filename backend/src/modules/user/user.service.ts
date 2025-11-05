import { UserRepository } from "./user.repository";

export class UserService {
  static async listUsers(query: any) {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const role = query.role || undefined;

    // Service: findAll users
    return await UserRepository.findAll({ role, page, limit });
  }
}