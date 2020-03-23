load("201224b0d1c296b45befd2285e95dd42.js");
// Don't abort in IonBuilder.
function f() {
	// For loop with missing condition.
	for (var y = 0; ; y++) {
		if (y == 55) break;
	}
	return y;
}

assertEq(f(), 55);
