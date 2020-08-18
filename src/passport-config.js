import passportJwt from "passport-jwt";

import UserService from "./services/UserService";

const { ExtractJwt, Strategy } = passportJwt;

export const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromBodyField("token"),
  secretOrKey: process.env.SECRET_KEY,
};

export const strategy = new Strategy(jwtOptions, (jwtPayload, next) => {
  console.log("payload received", jwtPayload);
  const user = UserService.getUser({ id: jwtPayload.id });
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});
