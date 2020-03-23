load("201224b0d1c296b45befd2285e95dd42.js");
// Arrow functions can have primitive |this| values.

Number.prototype.foo = function() {
    "use strict";
    return () => this;
}

for (var i=0; i<5; i++) {
    var n = i.foo()();
    assertEq(typeof n, "number");
    assertEq(n, i);
}
