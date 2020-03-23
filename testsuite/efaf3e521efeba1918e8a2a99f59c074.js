load("201224b0d1c296b45befd2285e95dd42.js");
// return exits the innermost enclosing arrow (not an enclosing function)

function f() {
    var g = x => { return !x; };
    return "f:" + g(true);
}

assertEq(f(), "f:false");
