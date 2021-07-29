function formatDate(dateInput) {
    const date = dateInput.getDate()
    const month = dateInput.toLocaleString('default', { month: 'long' })
    const year = dateInput.getFullYear()

    return `${date} ${month} ${year}`
}

function formatDateToHTMLInput(dateInput) {
    let date = dateInput.getDate()
    if(date < 10) {
        date = `0${date}`
    }
    let month = dateInput.getMonth() + 1
    if(month < 10) {
        month = `0${month}`
    }
    const year = dateInput.getFullYear()

    return `${year}-${month}-${date}`
}

module.exports = {formatDate, formatDateToHTMLInput}