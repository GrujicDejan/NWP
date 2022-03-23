function Reverse(s : string) : string[]
function Reverse(arr : string[]) : string[]

function Reverse() : string[] {
    function m1(s : string) {
        return s.split("").reverse()
    }

    function m2(arr : string[]) {
        return arr.slice().reverse()
    }

    if (typeof arguments[0] == "string") {
        return m1(arguments[0])
    }
    else {
        return m2(arguments[0])
    }
}

console.log(Reverse("marko"))
console.log(Reverse(["paja", "vlaja", "gaja"]))
