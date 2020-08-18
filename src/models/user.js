import Sequelize from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class User extends Sequelize.Model {
    static associate() {}
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
