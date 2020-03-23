load("201224b0d1c296b45befd2285e95dd42.js");
var obj = {valueOf: function() { "use strict"; undeclared = 7; }};
try { '' + obj; assertEq(true, false); } catch(e) { }
try { '' + obj; assertEq(true, false); } catch(e) { }
assertEq("undeclared" in this, false);
