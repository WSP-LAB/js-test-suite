load("201224b0d1c296b45befd2285e95dd42.js");
function foo() {
    x = null;
}
function f() {
    for (var i=0; i<99; i++) {
	x = null;
	if (i >= 97) {
	    gc();
	    gc();
	    foo();
	}
	x = {};
	if (i >= 97)
	    foo();
    }
}
f();
