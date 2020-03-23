load("201224b0d1c296b45befd2285e95dd42.js");
var h = { apply:function() { return "ponies"; } };
function f() { var x = 3; g = function() { return ++x }; return h.apply(null, arguments) }
assertEq(f(), "ponies");
