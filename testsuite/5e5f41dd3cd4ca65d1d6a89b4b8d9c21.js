load("201224b0d1c296b45befd2285e95dd42.js");
// We shouldn't do the wrong thing in the face of an evil Object.prototype

Object.prototype.get = function() {};
var x = {};
var setter = function () {};
x.__defineSetter__("a", setter);
var desc = Object.getOwnPropertyDescriptor(x, "a");
assertEq(desc.get, undefined);
assertEq(desc.set, setter);
delete Object.prototype.get;

Object.prototype.set = function() {};
x = {};
var getter = function () {};
x.__defineGetter__("a", getter);
desc = Object.getOwnPropertyDescriptor(x, "a");
assertEq(desc.set, undefined);
assertEq(desc.get, getter);
