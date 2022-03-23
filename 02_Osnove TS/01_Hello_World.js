var Program = /** @class */ (function () {
    function Program() {
    }
    Program.main = function (str) {
        console.log(str);
    };
    Program.prototype.check = function () {
        console.log("check function");
    };
    return Program;
}());
Program.main("Hello World!");
