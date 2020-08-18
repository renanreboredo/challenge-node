"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _passportConfig = require("../passport-config");

var _UserService = _interopRequireDefault(require("../services/UserService"));

var AuthController = /*#__PURE__*/function () {
  function AuthController() {
    (0, _classCallCheck2["default"])(this, AuthController);
  }

  (0, _createClass2["default"])(AuthController, null, [{
    key: "register",
    value: function () {
      var _register = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var _req$body, email, password;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$body = req.body, email = _req$body.email, password = _req$body.password;
                _context.next = 3;
                return _UserService["default"].createUser({
                  email: email,
                  password: password
                })["catch"](function () {
                  res.json({
                    success: false,
                    message: "Error while registering new user"
                  });
                });

              case 3:
                res.json({
                  success: true
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function register(_x, _x2) {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var _req$body2, email, password, user, payload, token;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;

                if (!(email && password)) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 4;
                return _UserService["default"].getUser({
                  email: email
                });

              case 4:
                user = _context2.sent;

                if (!user) {
                  res.status(401).json({
                    msg: "No such user found",
                    user: user
                  });
                }

                if (user.password === password) {
                  payload = {
                    id: user.id
                  };
                  token = _jsonwebtoken["default"].sign(payload, _passportConfig.jwtOptions.secretOrKey);
                  res.json({
                    msg: "ok",
                    token: token
                  });
                } else {
                  res.status(401).json({
                    msg: "Password is incorrect"
                  });
                }

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function login(_x3, _x4) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }]);
  return AuthController;
}();

var _default = AuthController;
exports["default"] = _default;