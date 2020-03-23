load("201224b0d1c296b45befd2285e95dd42.js");
load("6ec98b17981f95f4363b8bc9869495e2.js");

var summary = '';
var actual = '';
gcPreserveCode()
function TestCase(n, d, e, a) {
  this.name=n;
}
function reportCompare (expected, actual, description) {
  new TestCase
}
reportCompare(true, eval++, "Dummy description.");
var p = new Proxy({}, {
    has : function(id) {},
    set : function() {}
});
if (globalPrototypeChainIsMutable())
    Object.prototype.__proto__ = p;
new TestCase;
var expect = '';
reportCompare(expect, actual, summary);
gczeal(4);
try {
  evalcx(".");
} catch (e) {}
reportCompare(expect, actual, summary);
