load("201224b0d1c296b45befd2285e95dd42.js");
// The receiver argument is passed through proxies with no "set" handler.

var hits;
var a = new Proxy({}, {
    set(t, id, value, receiver) {
        assertEq(id, "prop");
        assertEq(value, 3);
        assertEq(receiver, b);
        hits++;
    }
});
var b = new Proxy(a, {});
hits = 0;
b.prop = 3;
assertEq(hits, 1);
