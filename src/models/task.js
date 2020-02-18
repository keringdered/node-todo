'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    task: DataTypes.TEXT,
    description: DataTypes.TEXT,
    status: DataTypes.ENUM('Pending','Progress','Completed')
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
    Task.hasMany(models.SubTask,{foreignKey:'task_id'}) ;
    Task.belongsTo(models.User,{foreignKey:'task_id'});
  };
  return Task;
};