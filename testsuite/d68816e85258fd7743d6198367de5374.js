load("201224b0d1c296b45befd2285e95dd42.js");
function g(x) {
    if ((x & 1) == 1) return 1;
    return 2;
}

function f(n) {
    var q = 0;
    for (var i = 0; i < n; i++)
        q += g(i);
    return q;
}

assertEq(f(1000), 1500);
