'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class TodoLabel extends Model {
        static associate(models) {
            // define association here
        }
    };
    TodoLabel.init({
        TodoId: DataTypes.INTEGER,
        LabelId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'TodoLabel',
    });
    return TodoLabel;
};