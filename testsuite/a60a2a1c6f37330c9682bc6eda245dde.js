load("201224b0d1c296b45befd2285e95dd42.js");
g0 = function(i) {
    this["g"+(i+1)] = g0;
    return "g"+(i+1);
}
function f() {
    a = eval("g0");
    for(var i=0; i<40; i++) {
        a = this[a(i)];
        if (i === 30) {
            gc();
        }
        assertEq(this["g" + i], g0);
    }
}
f();
