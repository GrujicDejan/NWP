// var a = 10
// var a = 20
// console.log(a)

var x = 10
console.log("x je: " + x);

(function f() {
    for (var x = 0; x < 5; x++) {
        console.log("inside x is: " + x)
    }
})();

console.log("x je: " + x)

function check() {
    var x = 100
    if (true) {
        var x = 100000
    }
    return x
}

console.log(check())