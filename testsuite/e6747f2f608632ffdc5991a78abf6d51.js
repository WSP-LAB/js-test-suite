load("201224b0d1c296b45befd2285e95dd42.js");
// Funny case that looks kind of like default arguments isn't.

var f = (msg='hi', w=window => w.alert(a, b));  // sequence expression
assertEq(msg, 'hi');
assertEq(typeof w, 'function');
assertEq(f, w);
