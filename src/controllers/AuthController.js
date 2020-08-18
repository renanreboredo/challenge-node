import jwt from "jsonwebtoken";
import { jwtOptions } from "../passport-config";
import UserService from "../services/UserService";

class AuthController {
  static async register(req, res) {
    const { email, password } = req.body;
    await UserService.createUser({ email, password }).catch(() => {
      res.json({
        success: false,
        message: "Error while registering new user",
      });
    });
    res.json({ success: true });
  }

  static async login(req, res) {
    const { email, password } = req.body;
    if (email && password) {
      const user = await UserService.getUser({ email });
      if (!user) {
        res.status(401).json({ msg: "No such user found", user });
      }

      if (user.password === password) {
        const payload = { id: user.id };
        const token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.json({ msg: "ok", token });
      } else {
        res.status(401).json({ msg: "Password is incorrect" });
      }
    }
  }
}

export default AuthController;
