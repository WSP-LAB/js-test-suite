load("201224b0d1c296b45befd2285e95dd42.js");

function g(o, idx, exp) {
    for (var i=0; i<3000; i++) {
	assertEq(o[idx], exp);
    }
}
function f() {
    var o = [];
    for (var i=1; i<100; i++) {
	o[-i] = 1;
    }
    g(o, 50, undefined);
    g(o, -50, 1);
}
f();
