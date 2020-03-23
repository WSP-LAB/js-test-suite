load("201224b0d1c296b45befd2285e95dd42.js");
function f() {};
var x;
for(var i=0; i<200; i++) {
    x = f.bind(x, x, 2);
    gc();
}
