load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError

// Binary: cache/js-dbg-64-6c8becdd1574-linux
// Flags:
//
(function () {
    [] = x = /x/;
    x.toString = Function.prototype.bind;
    print(x)
})()
