// const a = 0 // 0 é igual a false em js
// const b = null // null também é false
// const c = 'Test' // A string do c é true, pois tem conteúdo

// console.log(a ?? b ?? c) // se a for null ou undefined, retorna b, se for tb, retorna c, caso contrario, retorna a

let a = 0
let b = a || 42

b = a ?? 42 // returns 0 because a is not null or undefined

let c  = "" || 42

console.log({c})

function f (...args) {
console.log(args[0], args[args.length - 1])
}    
f(1, 2, 3, 4)