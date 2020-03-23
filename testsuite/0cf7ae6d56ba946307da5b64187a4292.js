load("201224b0d1c296b45befd2285e95dd42.js");
function foo(n) { return n; }
foo.apply = function(a, b) { return b[0]; }
function bar(value) { return foo.apply(null, arguments); }
for (var i = 1 ; i < 4; i++)
  assertEq(bar(i), i);
