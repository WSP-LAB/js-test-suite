load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var a = arguments;
    eval("assertEq(arguments[0], 42)");
    eval("assertEq(arguments, a)");
    arguments = undefined;
    eval("assertEq(arguments, undefined)");
    arguments = a;
    eval("assertEq(arguments[0], 42)");
    eval("assertEq(arguments, a)");
}
f(42);

function f(z) {
    var a = arguments;
    eval("assertEq(arguments[0], 42)");
    eval("assertEq(arguments, a)");
    arguments = undefined;
    eval("assertEq(arguments, undefined)");
    z = 17;
    eval("assertEq(a[0], 17)");
    a[0] = 'ponies';
    eval("assertEq(z, 'ponies')");
}
f(42);
