function getGreetingMessage() {
    const currentHour = new Date().getHours()
    if(currentHour < 12) {
        return 'morning'
    } else if(currentHour < 18) {
        return 'afternoon'
    } else {
        return 'evening'
    }
}

module.exports = getGreetingMessage


