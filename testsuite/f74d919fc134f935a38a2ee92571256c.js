load("201224b0d1c296b45befd2285e95dd42.js");
(function() {
    f = (function(y) {
        return y ? (2147483648 >>> 0) / 1 == -2147483648 : 2147483648;
    })
    assertEq(f(0), 2147483648);
    assertEq(f(1), false);
})()
