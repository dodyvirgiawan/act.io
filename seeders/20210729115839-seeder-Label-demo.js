'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Labels", [
        {
            name : "Project",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name : "Entertainment",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name : "Day to day",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Labels", null, {})
    }
};
