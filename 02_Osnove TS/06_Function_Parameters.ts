// function add(a : number, b : number) : number {
//     return a + b
// }
// console.log(add(2, 3))
// console.log(add(2))


// function add(a : number, b? : number) : number {
//     return a + b;
// }

// console.log(add(2, 3))
// console.log(add(2))

function add(a : number, b = 0) : number {
    return a + b;
}

console.log(add(2, 3))
console.log(add(2))