const helperDate = {
    convertDate (data){
        const [day, month, year] = data.split('/')
        const newDate = year+'-'+month+'-'+day
        return newDate
    }
}

module.exports = {
    helperDate
}