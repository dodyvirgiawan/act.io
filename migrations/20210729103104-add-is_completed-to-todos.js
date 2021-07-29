'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Todos', 'is_completed', Sequelize.BOOLEAN)
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Todos', 'is_completed')
    }
};