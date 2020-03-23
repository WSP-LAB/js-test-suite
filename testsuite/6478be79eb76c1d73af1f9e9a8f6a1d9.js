load("201224b0d1c296b45befd2285e95dd42.js");
// Binary: cache/js-dbg-32-6cd262091470-linux
// Flags: -j
//
a = evalcx("lazy");
b = {}
b.__proto__ = a
a.__proto__ = String
for (var a = 0; a < 50; a++) {
    try {
        b + ""
    } catch (e) {}
}
