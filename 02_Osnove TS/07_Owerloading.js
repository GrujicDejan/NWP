function hello() {
    function m1() {
        console.log("Hello world!");
    }
    function m2(name) {
        console.log("Hello ", name);
    }
    if (arguments.length == 0) {
        m1();
    }
    else if (arguments.length == 1) {
        m2(arguments[0]);
    }
    else {
        throw "abc";
    }
}
hello();
hello("Marko");
hello("paja", "vlaja", "gaja");
