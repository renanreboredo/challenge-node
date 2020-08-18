"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strategy = exports.jwtOptions = void 0;

var _passportJwt = _interopRequireDefault(require("passport-jwt"));

var _UserService = _interopRequireDefault(require("./services/UserService"));

var ExtractJwt = _passportJwt["default"].ExtractJwt,
    Strategy = _passportJwt["default"].Strategy;
var jwtOptions = {
  jwtFromRequest: ExtractJwt.fromBodyField("token"),
  secretOrKey: process && process.env && process.env.SECRET_KEY || "jJhgMBesnxF73ygIk9X7mCUWvTnR0S94tI5gr8-CmwNHxOanPyXEStelHwNZnBDT8UWjT4pudQP9exXPMHc60s06K0w7MDrc4k6oz4miSjqrNZhFK2HYdfAmpNaGSJw-CFZ3ADxmaNsU9GItvpCcWUW-qfsPBpC9QnmXkGT1xpF3RXxN41oPSQPirXaUtcFhO4e9vEKaruALSwWXRdeeL2nonSgKFp3P62X2H42VNLVHVripapqiF9PKGdbd8SLZdv96afABuELw1D4Ohug0W0SwfSrPti1dFjfwQsObrdXCC-dpmMpSGj1obUtbeKevFzJSrfH0Q-nQ4c3WndRU7QjJhgMBesnxF73ygIk9X7mCUWvTnR0S94tI5gr8-CmwNHxOanPyXEStelHwNZnBDT8UWjT4pudQP9exXPMHc60s06K0w7MDrc4k6oz4miSjqrNZhFK2HYdfAmpNaGSJw-CFZ3ADxmaNsU9GItvpCcWUW-qfsPBpC9QnmXkGT1xpF3RXxN41oPSQPirXaUtcFhO4e9vEKaruALSwWXRdeeL2nonSgKFp3P62X2H42VNLVHVripapqiF9PKGdbd8SLZdv96afABuELw1D4Ohug0W0SwfSrPti1dFjfwQsObrdXCC-dpmMpSGj1obUtbeKevFzJSrfH0Q-nQ4c3WndRU7Q"
};
exports.jwtOptions = jwtOptions;
var strategy = new Strategy(jwtOptions, function (jwtPayload, next) {
  console.log("payload received", jwtPayload);

  var user = _UserService["default"].getUser({
    id: jwtPayload.id
  });

  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});
exports.strategy = strategy;