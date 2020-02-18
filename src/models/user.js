'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id:{allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED},
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {underscored:true});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};