load("201224b0d1c296b45befd2285e95dd42.js");
var isTrue = true;

function g(x) {
    return x;
}

function f() {
    return g.apply(null, isTrue ? ["happy"] : arguments);
}

for (var i = 0; i < 18; ++i)
    assertEq(f("sad"), "happy");
