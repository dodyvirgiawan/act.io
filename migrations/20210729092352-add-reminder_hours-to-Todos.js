'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Todos', 'reminder_hours', Sequelize.STRING)
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Todos', 'reminder_hours')
    }
};
