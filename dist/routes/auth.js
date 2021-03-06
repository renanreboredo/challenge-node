"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _AuthController = _interopRequireDefault(require("../controllers/AuthController"));

var router = (0, _express.Router)();
router.post("/register", _AuthController["default"].register);
router.post("/login", _AuthController["default"].login);
var _default = router;
exports["default"] = _default;