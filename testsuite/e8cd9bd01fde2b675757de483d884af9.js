load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
	return (NaN ? 4 : 5);
}
assertEq(f(), 5);
