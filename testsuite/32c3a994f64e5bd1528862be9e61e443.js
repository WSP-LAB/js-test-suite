load("201224b0d1c296b45befd2285e95dd42.js");
var a, b;
function g(x) {
    var y = x++;
    return [x, y];
}
function f() {
    for(var i=0; i<20; i++) {
        [a,b] = g("10");
    }
}
f();
