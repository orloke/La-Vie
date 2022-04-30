const convertDate = (data)=>{
    const [day, month, year] = data.split('/')
    const novaIdade = Math.trunc((new Date()-new Date(parseInt(year),parseInt(month),parseInt(day)))/31557600000)
    return novaIdade
}

module.exports = {
    convertDate
}