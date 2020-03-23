load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    try {
	for ( var i = 7; i > -2; i-- )
	    new Array(i).join('*');
    } catch (e) {
	return e instanceof RangeError;
    }
    return false;
}
assertEq(f(), true);
