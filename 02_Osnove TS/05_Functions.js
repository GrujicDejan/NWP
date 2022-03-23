i = 10;
console.log(i);
var i;
//function declaration syntax
show();
function show() {
    console.log("Show must go on");
}
//function expression syntax
var showEnded = function () {
    console.log("Show ended");
};
showEnded();
var encore = new Function('console.log("abc")');
encore();
function add1(a, b) {
    return a + b;
}
var add2 = function (a, b) {
    return a + b;
};
var add3;
add3 = function (a, b) {
    return a + b;
};
// anonymus function
var add4;
add4 = function (x, y) {
    return x + y;
};
//lambdas
var add5;
add5 = function (x, y) {
    console.log(x);
    console.log(y);
    return x + y;
};
var add6;
add6 = function (x, y) { return x + y; };
console.log(add1(1, 2));
console.log(add2(1, 2));
console.log(add3(1, 2));
console.log(add4(1, 2));
console.log(add5(1, 2));
console.log(add6(1, 2));
