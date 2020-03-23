load("201224b0d1c296b45befd2285e95dd42.js");
var result = "foobarbaz".replace(/foo(bar)?bar/, "$1");
assertEq(result, "baz");
