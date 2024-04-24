const average = (...notes) => {
    const sumNotes = notes.reduce((acc, val) => acc + val, 0)
    return sumNotes/notes.length
}

const weightedAverage = (...obj) => {
    let total = []
    obj.forEach(element => total.push(element.n * element.p)) 

    const sum = total.reduce((acc, val) => acc + val, 0)

    let weights = []
    obj.forEach(element => weights.push(element.p))
    const sumWeights = weights.reduce((acc, val) => acc + val, 0)
    
    return sum / sumWeights
}

const median = ([...val]) => {
    val.sort((a, b) => a - b)

    const middle = val.length / 2
    let center = 0

    if (val.length % 2 === 0) {
        for (let i = 0; i < val.length; i++) {
            center = average(val[middle-1], val[middle])
        }
    } else {
        for (let i = 0; i < val.length; i++) {
            center = val[Math.floor(middle)]
        }
    }

    return center
}

const fashion = (...numbers) => {
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    quantities.sort((a, b) => b[1] - a[1])

    console.log(quantities)
}

console.log(fashion(1, 1, 5, 4, 5, 3, 4, 4))

