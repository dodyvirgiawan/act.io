'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Todos', 'reminder_date', Sequelize.DATE)
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Todos', 'reminder_date')
    }
};
