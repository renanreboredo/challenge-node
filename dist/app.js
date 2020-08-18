"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _compression = _interopRequireDefault(require("compression"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _morgan = _interopRequireDefault(require("morgan"));

var _passport = _interopRequireDefault(require("passport"));

var _passportConfig = require("./passport-config");

var _auth = _interopRequireDefault(require("./routes/auth"));

_dotenv["default"].config();

var app = (0, _express["default"])();

_passport["default"].use(_passportConfig.strategy);

app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use((0, _helmet["default"])());
app.use((0, _cors["default"])());
app.use((0, _compression["default"])());
app.use("/api", _auth["default"]);
app.use(_passport["default"].initialize());
module.exports = app;