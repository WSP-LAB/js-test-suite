load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    for (var i=0; i<30000; i++) {
        var a = inIon() ? 0 : 300;
        var buf = new Uint8ClampedArray(a);
        (function() {}) * this;
    }
    try {} catch(e) {}
}
f();
