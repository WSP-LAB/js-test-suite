load("201224b0d1c296b45befd2285e95dd42.js");
// 'this' in a toplevel arrow is the global object.

var f = () => this;
assertEq(f(), this);
assertEq({f: f}.f(), this);
