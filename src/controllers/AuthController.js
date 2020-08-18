import AuthService from "../services/AuthService";

class AuthController {
  static async register(req, res) {
    const { email, password } = req.body;
    const user = await AuthService.register({ email, password }).catch(() => {
      res.json({ success: false, message: "Error while registering new user" });
    });
    console.log(user);
    res.json({ success: true });
  }
}

export default AuthController;
