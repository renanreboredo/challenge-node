"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllUsers = void 0;

var _models = require("../models");

var getAllUsers = function getAllUsers(req, res, next) {
  _models.User.findAll({}).then(function () {
    res.send('User route');
  });
};

exports.getAllUsers = getAllUsers;