load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var msg = '';
    try {
        var x = undefined;
        print(x.foo);
    } catch (e) {
        msg = '' + e;
    }
    assertEq(msg, "TypeError: x is undefined");
}
f();
