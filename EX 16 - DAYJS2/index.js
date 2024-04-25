const dayjs = require('dayjs')

function data(dataBirth) {
    const age = dayjs().diff(dataBirth, 'year')
    const nextBirthday = dataBirth.add(age + 1, 'year') 
    return nextBirthday
}

console.log(data(dayjs('2004-06-19')))
