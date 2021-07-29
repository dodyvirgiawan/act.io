function getErrorItems(errorInstances) {  //* Only send key => message, path and validator key to the query
    const errors = []

    errorInstances.forEach(el => {
        errors.push({
            message: el.message,
            path: el.path,
            validatorKey: el.validatorKey
        })
    })

    return errors
}

module.exports = getErrorItems