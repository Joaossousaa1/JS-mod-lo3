const user = {
    name: 'Jon Doe',
    email: 'doejhon@gmail.com',
    friends: [{
        name: 'Mary',
        street: 'Some Street',
        number: 69
    }],
    age: 42,
    phone: {
        countryCode: '+55',
        ddd: '22',
        number: '982155732'
    }
}

console.log(user?.friends[0]?.phone?.ddd)
console.log(user.friends?.[4]?.length)