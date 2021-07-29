'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Labels", [
      {
        name : "Label1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name : "Label2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name : "Label3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Labels", null, {})
  }
};
