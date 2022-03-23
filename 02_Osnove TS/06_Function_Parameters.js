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
function add(a, b) {
    if (b === void 0) { b = 0; }
    return a + b;
}
console.log(add(2, 3));
console.log(add(2));
