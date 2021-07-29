const schedule = require('node-schedule')
const Vonage = require('@vonage/server-sdk')
const { formatDate, formatDateToHTMLInput } = require('./formatDate.js')

//* Init vonage
const vonage = new Vonage({
    apiKey: "6c4eddbe",
    apiSecret: "9oDtuvSg7aoAN2IG"
})

function generateScheduledSms(instance, phone_number) {
    //* Schedule
    const reminderDate = formatDateToHTMLInput(instance.reminder_date)
    const deadlineDate = formatDate(instance.deadline)
    const reminderHours = instance.reminder_hours + ':00.000+7:00'
    const timeToSend = new Date(`${reminderDate}T${reminderHours}`)

    //* Message
    const from = "Act.io"
    const to = ['62'].concat(phone_number.split('').splice(1).join('')).join('') // Replace 0 at the beginning with 62
    const text = `Hello from Act.io! This is a reminder for you regarding the task ${instance.name} that will be due on ${deadlineDate}.`

    //* Process
    schedule.scheduleJob('sendsms', timeToSend, () => {
        vonage.message.sendSms(from, to, text, (err, responseData) => {
            if (err) {
                console.log(err);
            } else {
                if(responseData.messages[0]['status'] === "0") {
                    console.log("Message sent successfully.");
                } else {
                    console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
                }
            }
            schedule.cancelJob('sendsms') //* Stop the process (make sure to send only once)
        })
    })
}

//* Testing purpose
// const instance = {
//     id: 3,
//     name: 'Create website',
//     description: 'This is a description',
//     priority: 'High',
//     deadline: new Date('2021-07-29T00:00:00.000Z'),
//     reminder_date: new Date('2021-07-29T00:00:00.000Z'), //* Change this (the date only)
//     reminder_hours: '22:09', //* Change this
//     UserId: 1,
//     updatedAt: new Date('2021-07-29T13:52:24.747Z'),
//     createdAt: new Date('2021-07-29T13:52:24.747Z'),
//     is_completed: false
// }

// generateScheduledSms(instance, '123456789')

module.exports = generateScheduledSms