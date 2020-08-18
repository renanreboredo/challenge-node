import database from "../models";

export default class AuthService {
  static async register(user) {
    try {
      return await database.User.create(user);
    } catch (error) {
      throw error;
    }
  }
}
