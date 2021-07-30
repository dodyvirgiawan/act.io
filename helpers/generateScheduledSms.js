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
        //! Uncomment this if just want to test the schedule
        console.log(`From: ${from}\nTo: ${to}\nMessage: ${text}`)
        schedule.cancelJob('sendsms')

        //! Uncomment this to send actual SMS
        // vonage.message.sendSms(from, to, text, (err, responseData) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         if(responseData.messages[0]['status'] === "0") {
        //             console.log("Message sent successfully.");
        //         } else {
        //             console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        //         }
        //     }
        //     schedule.cancelJob('sendsms') //* Stop the process (make sure to send only once)
        // })
    })
}

module.exports = generateScheduledSms