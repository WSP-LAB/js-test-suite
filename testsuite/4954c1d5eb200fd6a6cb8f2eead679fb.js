load("201224b0d1c296b45befd2285e95dd42.js");
try {
    (function() {
	let a = 3;
	let XY = XY;
	return function() { return a; };
    })();
    assertEq(0, 1);
} catch(e) {
    assertEq(e instanceof ReferenceError, true);
    assertEq(e.message.includes("XY"), true);
}
