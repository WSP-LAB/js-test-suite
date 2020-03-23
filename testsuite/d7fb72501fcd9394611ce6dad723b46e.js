load("201224b0d1c296b45befd2285e95dd42.js");
var obj = { valueOf: {}, toString: function() { return 0; } };
for (var i = 0; i < 25; i++)
  assertEq(obj < 1, true);
