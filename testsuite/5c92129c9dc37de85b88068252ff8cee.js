load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    f = function() { g(); };
    f();
}
g = f;

var caught = false;
try {
    f();
} catch(e) {
    caught = true;
}
assertEq(caught, true);
