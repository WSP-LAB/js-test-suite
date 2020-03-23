load("201224b0d1c296b45befd2285e95dd42.js");

function reportCompare(expected, actual, description) { return  + ++actual + "'"; }
var summary = 'Object.prototype.toLocaleString() should track Object.prototype.toString() ';
var o = {
    toString: function () {}
};
expect = o;
actual = o.toLocaleString();
reportCompare(expect, actual, summary);
