i = 10
console.log(i)
var i

//function declaration syntax
show();

function show() {
    console.log("Show must go on")
}


//function expression syntax
var showEnded = function() {
    console.log("Show ended")
}


showEnded()


var encore = new Function('console.log("abc")')
encore()


function add1(a : number, b : number) : number {
    return a + b
}

var add2 = function(a : number, b : number) : number {
    return a + b
}


var add3: (a : number, b : number) => number
add3 = function(a : number, b : number) {
    return a + b
}


// anonymus function
var add4: (a : number, b : number) => number
add4 = function(x, y) {
    return x + y
}

//lambdas
var add5: (a : number, b : number) => number
add5 = (x, y) => {
    console.log(x)
    console.log(y)
    return x + y
}

var add6: (a : number, b : number) => number
add6 = (x, y) => x + y

console.log(add1(1, 2))
console.log(add2(1, 2))
console.log(add3(1, 2))
console.log(add4(1, 2))
console.log(add5(1, 2))
console.log(add6(1, 2))