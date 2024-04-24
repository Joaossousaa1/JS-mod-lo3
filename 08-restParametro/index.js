const arr = [1, 2, 3, 4, 5]

function sum(...array) {
    return array.reduce((acc, val) => acc + val, 0)
}

console.log(sum(arr))