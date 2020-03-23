load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:InternalError

// Binary: cache/js-dbg-64-b84d0be52070-linux
// Flags:
//
var x = new Proxy(Function, {});
if (x.__proto__ = x) {
    print(x);
}
