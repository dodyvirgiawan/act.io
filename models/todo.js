'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Todo extends Model {
        static associate(models) {
            Todo.belongsTo(models.User, {foreignKey: 'UserId'})
            Todo.belongsToMany(models.Label, {through: models.TodoLabel, foreignKey: 'TodoId'})
        }
    };
    Todo.init({
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        priority: DataTypes.STRING,
        deadline: DataTypes.DATE,
        UserId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Todo',
    });
    return Todo;
};