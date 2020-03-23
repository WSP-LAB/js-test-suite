load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var x;
    for (var a = 0; a < 4; a++) {
	switch (NaN) {
	default:
	    x = a;
	}
    }
    assertEq(x, 3);
}

f();
