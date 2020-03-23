load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:Error

// Binary: cache/js-dbg-64-63bff373cb94-linux
// Flags: -m -n -a
//

function f(a, b, c) {
    arguments[('4294967295')] = 2;
}
assertEq(f(1), "1234");
