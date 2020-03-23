load("201224b0d1c296b45befd2285e95dd42.js");
var obj = { toString: {}, valueOf: function() { return "foopy"; } };
for (var i = 0; i < 25; i++)
  assertEq(String(obj), "foopy");
