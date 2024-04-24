const person = {
    nameP: 'Luiz',
    lastName: 'Miranda',
    age: 20,
    address: {
        road: 'Av Brasil',
        number: 320
    }
}

const { nameP, lastName, age, ...rest} = person
console.log(nameP, lastName, age, rest)