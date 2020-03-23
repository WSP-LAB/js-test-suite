load("201224b0d1c296b45befd2285e95dd42.js");

var global = this;
function f() {
    return eval("'use strict'; this;");
}
for (var j = 0; j < 5; ++j) {
    assertEq(f(), global);
}
