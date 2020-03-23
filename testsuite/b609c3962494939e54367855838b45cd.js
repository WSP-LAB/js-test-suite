load("201224b0d1c296b45befd2285e95dd42.js");
// Don't abort during SSA construction.
function f() {
	var i = 0;
	while (i < 100 && 1 == 1) {
		i++;
	}
	return i;
}

assertEq(f(), 100);
