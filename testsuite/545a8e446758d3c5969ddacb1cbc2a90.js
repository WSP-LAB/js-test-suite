load("201224b0d1c296b45befd2285e95dd42.js");

"use strict";

function loop(a) {
    a = arguments.length;
    var result = 0;
    for (var i = 0; i < 5000; i++) {
        result += a;
    }
    return result;
}

assertEq(loop(11), 5000);
