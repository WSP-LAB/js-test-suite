load("201224b0d1c296b45befd2285e95dd42.js");
function f(x, y) {
    for (var i=0; i<50; i++) {
	if (i % 10 === 0) {
	    var stack = getBacktrace({args: true, locals: true, thisprops: true});
	    assertEq(stack.includes("f(x = "), true);
	    foo = arguments;
	}
    }
}
f(1, 2);
