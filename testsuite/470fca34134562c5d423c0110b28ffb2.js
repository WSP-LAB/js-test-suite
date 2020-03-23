load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var n;
    var k;
    for (var i = 0; i < 18; ++i) {
	n = undefined;
	k = n++;
	if (k) { }
    }
    return [k, n];
}

var [a, b] = f();

assertEq(isNaN(a), true);
assertEq(isNaN(b), true);
