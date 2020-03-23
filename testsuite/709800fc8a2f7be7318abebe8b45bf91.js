load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:is not a function
var arr = [];

var C = function () {};
C.prototype.dump = function () {};
arr[0] = new C;

C = function () {};
C.prototype.dump = this;
arr[1] = new C;

function f() {
    for (var i = 0; i < arr.length; i++)
        arr[i].dump();
}

try {
    f();
} catch (exc) {
    assertEq(exc.message.includes("is not a function"), true);
}
f();
