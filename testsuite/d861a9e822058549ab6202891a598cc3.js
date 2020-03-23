load("201224b0d1c296b45befd2285e95dd42.js");
// Binary: cache/js-dbg-32-32e8c937a409-linux
// Flags: -m -n
//
function f() {
    try {
        (new {
            x: function() {}
        }.x)();
    } catch (e) {}
}
for (var i = 0; i<10000; i++) {
    f();
}
