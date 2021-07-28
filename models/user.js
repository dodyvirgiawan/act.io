'use strict';

const { Model } = require('sequelize');
const { hashPassword, comparePassword } = require('../helpers/passwordAuth.js')

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.Todo, {foreignKey: 'UserId'})
        }
    };
    User.init({
        first_name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: 'Please input your first name'
                }
            }
        },
        last_name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: 'Please input your last name'
                }
            }
        },
        phone_number: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: 'Please input your phone number'
                },

                isNumeric: {
                    msg: 'Please input phone number in number format'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: 'Please input your first name'
                },

                isEmail: {
                    msg: 'Please input e-mail in e-mail format'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: 'Please input your password'
                }
            }
        },
    }, {
        hooks: {
            beforeCreate(userData) {
                userData.password = hashPassword(userData.password)
            }
        },
        sequelize,
        modelName: 'User',
    });
    return User;
};