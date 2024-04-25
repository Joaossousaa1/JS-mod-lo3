const dayjs = require('dayjs')


function data(dataBirth) {
    const age = dayjs().diff(dataBirth, 'year')
    const nextBirthday = dataBirth.add(age + 1, 'year')
    const diference = dayjs(nextBirthday).diff(dayjs(), 'day')

    console.log(`Age: ` + age + '\nNext birthday: ' + nextBirthday.format('DD/MM/YYYY'))
    console.log('Rest day: ' + diference)
}

data(dayjs('2004-06-19'))
