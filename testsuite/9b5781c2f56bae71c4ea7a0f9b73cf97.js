load("201224b0d1c296b45befd2285e95dd42.js");
function f(useArg2, arg2, expect) {
    var args = arguments;
    if (useArg2)
	args = arg2;
    assertEq(args.length, expect);
}
f(false, 0, 3);
f(false, 0, 3);
