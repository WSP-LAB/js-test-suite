load("201224b0d1c296b45befd2285e95dd42.js");
// Entering catch blocks via OSR is not possible (because the catch block
// is not compiled by Ion). Don't crash.
function f() {
    var res = 0;
    try {
	throw 1;
    } catch(e) {
	for (var i=0; i<10; i++) {
	    res += 3;
	}
    }

    assertEq(res, 30);
}
f();
