load("201224b0d1c296b45befd2285e95dd42.js");

function foo() {
	return '' / undefined;
}

foo();
assertEq(foo(), NaN);
