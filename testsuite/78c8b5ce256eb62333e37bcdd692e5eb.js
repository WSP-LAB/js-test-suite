load("201224b0d1c296b45befd2285e95dd42.js");
var o = {};
function f() {
    function g() {
        x = 80;
        return x;
    };
    Object.defineProperty(o, "f", {get:g});
    var [x] = [];
    x = {};
    2 + o.f;
    print(x);
}
f();
