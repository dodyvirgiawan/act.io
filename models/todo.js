'use strict';

const { Model } = require('sequelize');
const { formatDate } = require('../helpers/formatDate.js')

module.exports = (sequelize, DataTypes) => {
    class Todo extends Model {
        static associate(models) {
            Todo.belongsTo(models.User, {foreignKey: 'UserId'})
            Todo.belongsToMany(models.Label, {through: models.TodoLabel, foreignKey: 'TodoId'})
        }

        static deleteTodo(id, UserId) { //* Static method since query is used in two routes
            return new Promise((resolve, reject) => {
                Todo.destroy({where: {id, UserId}})
                    .then(data => resolve(data))
                    .catch(err => reject(err))
            })
        }

        showDeadline() {
            return formatDate(this.deadline)
        }

        showReminderDate() {
            return formatDate(this.reminder_date) + ` on ${this.reminder_hours}` 
        }
    };
    Todo.init({
        name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: 'Please input your task name'
                }
            }
        },
        description: DataTypes.TEXT,
        priority: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: 'Please select the priority of your task'
                }
            }
        },
        deadline: {
            type: DataTypes.DATE,
            validate: {
                notEmpty: {
                    msg: 'Please input your task deadline'
                },
            }
        },
        UserId: DataTypes.INTEGER,
        reminder_date: {
            type: DataTypes.DATE,
            validate: {
                notEmpty: {
                    msg: 'Please input reminder date'
                }
            }
        },
        reminder_hours: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    msg: 'Please input reminder hours'
                },

                isValidHour(value) {
                    const validHour = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/.test(value);

                    if (!validHour) {
                        throw new Error('Please input hour in correct format (e.g 15:30)')
                    } 
                }
            }
        },
        is_completed: DataTypes.BOOLEAN
    }, {
        hooks: {
            beforeCreate(instance) {
                instance.is_completed = false
            }
        },
        sequelize,
        modelName: 'Todo',
    });
    return Todo;
};