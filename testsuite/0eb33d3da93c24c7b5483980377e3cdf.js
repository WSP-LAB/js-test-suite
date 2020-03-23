load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
gczeal(11);
var o = { valueOf: function() { new Object(); gc(); return 17; } };
(new String.prototype.substring(o)).toString;
