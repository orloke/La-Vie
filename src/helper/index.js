const helperDate = {
    convertDate (data){
        const [day, month, year] = data.split('/')
        const newDate = year+'-'+month+'-'+day+' '+'00:00:00'
        return newDate
    }
}

module.exports = {
    helperDate
}
