"use strict";

module.exports = {
  development: {
    username: "rebores",
    password: "root",
    database: "database_development",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "rebores",
    password: "root",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "rebores",
    password: "root",
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres"
  }
};