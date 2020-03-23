load("201224b0d1c296b45befd2285e95dd42.js");
var g;
function foo(b) {
    if (b)
        function arguments() {};
    return arguments;
}

var a = foo(true);
assertEq(typeof a, "function");
assertEq(a.name, "arguments");
