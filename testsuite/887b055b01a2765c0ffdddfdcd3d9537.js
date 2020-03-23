load("201224b0d1c296b45befd2285e95dd42.js");

function foo(n) {
    for (var i = 0; i < n; i++) {}
    return i;
}

assertEq(foo(1000), 1000);

gc();

eval("assertEq(foo(1000.5), 1001)");

