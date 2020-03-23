load("201224b0d1c296b45befd2285e95dd42.js");

var counter = 0;
var x = { toString: function() { counter++; } };
var y = {};

for (var i = 0; i < 50; i++)
  ++y[x];

// :FIXME: bug 672076
//assertEq(counter, 50);
