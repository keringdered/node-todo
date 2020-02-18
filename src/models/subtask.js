'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubTask = sequelize.define('SubTask', {
    id: {allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED},
    task_id: DataTypes.INTEGER.UNSIGNED,
    user_id: DataTypes.INTEGER.UNSIGNED,
    description: DataTypes.TEXT,
    status: {type:DataTypes.ENUM('PENDING','COMPLETE'),defaultValue:'PENDING'}
  }, {underscored:true});
  SubTask.associate = function(models) {
    // associations can be defined here
    SubTask.belongsTo(models.User,{foreignKey:'user_id'});
  };
  return SubTask;
};