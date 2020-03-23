load("201224b0d1c296b45befd2285e95dd42.js");
function g(x,y) {
    return x + y;
}

function f(x) {
    return g.apply(null, arguments);
}

for (var i = 0; i < 100; ++i)
    assertEq(f(i, 1), i+1);
