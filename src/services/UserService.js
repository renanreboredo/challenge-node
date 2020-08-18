import { User } from "../models";

export default class UserService {
  static async createUser(user) {
    try {
      return await User.create(user);
    } catch (error) {
      throw error;
    }
  }

  static async getUser(where) {
    return User.findOne({ where });
  }
}
