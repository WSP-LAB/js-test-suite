load("201224b0d1c296b45befd2285e95dd42.js");
// return exits the innermost enclosing arrow (not an enclosing arrow)

function f() {
    var g = a => [0, 1].map(x => { return x + a; });
    return g(13).toSource();
}

assertEq(f(), "[13, 14]");
