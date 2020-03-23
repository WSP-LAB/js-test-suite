load("201224b0d1c296b45befd2285e95dd42.js");
// for-of on an empty slow array does nothing.

var a = [];
a.slow = true;
for (var x of a)
    fail();
