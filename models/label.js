'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Label extends Model {
        static associate(models) {
            Label.belongsToMany(models.Todo, {through: models.TodoLabel, foreignKey: 'LabelId'})
        }
    };
    Label.init({
        name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: 'Please input the label name'
                }
            }
        }
    }, {
        sequelize,
        modelName: 'Label',
    });
    return Label;
};