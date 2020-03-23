load("201224b0d1c296b45befd2285e95dd42.js");

/* Inheritance of shadowed function properties from Object.prototype. */

delete Function.prototype.toString;
assertEq(Function.prototype.toString, Object.prototype.toString);
