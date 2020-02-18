'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    let {INTEGER,TEXT,ENUM,DATE} = Sequelize;
    return queryInterface.createTable('sub_tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER.UNSIGNED
      },
      task_id: {
        type: INTEGER.UNSIGNED ,
        allowNull:true
      },
      user_id: {
        type: INTEGER.UNSIGNED ,
        allowNull:true
      },
      description: {
        type: TEXT
      },
      status: {
        type: ENUM('pending','completed') ,
        defaultValue:'pending'
      },
      created_at: {
        allowNull: false,
        type: DATE
      },
      updated_at: {
        allowNull: false,
        type: DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sub_tasks');
  }
};