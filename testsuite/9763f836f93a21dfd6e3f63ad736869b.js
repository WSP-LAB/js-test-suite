load("201224b0d1c296b45befd2285e95dd42.js");
(function(x) {
    for (var y = 0; y < 1; y++) {
        assertEq(Array.prototype.shift.call(arguments.callee.arguments), 0);
    }
})(0)
