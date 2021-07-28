'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Label extends Model {
        static associate(models) {
            Label.belongsToMany(models.Todo, {through: models.TodoLabel, foreignKey: 'LabelId'})
        }
    };
    Label.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Label',
    });
    return Label;
};