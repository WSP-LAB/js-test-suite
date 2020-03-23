load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:InternalError

// Binary: cache/js-dbg-32-92fe907ddac8-linux
// Flags: -m -n
//
o = {}
o.valueOf = function() {
    for (var p in undefined) {
        a = new Function;
    }
    +o;
};
+o;
