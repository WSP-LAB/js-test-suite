load("201224b0d1c296b45befd2285e95dd42.js");
// for-of on an Array consults the prototype chain when it encounters a hole.

load("e2c808509c360663d6364e14c187fc8f.js");

var m = {1: 'peek'};
var a = [0, , 2, 3];
a.__proto__ = m;
var log = [];
Object.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
for (var x of a)
    log.push(x);
assertEq(log[1], 'peek');
assertEq(log.join(), "0,peek,2,3");
