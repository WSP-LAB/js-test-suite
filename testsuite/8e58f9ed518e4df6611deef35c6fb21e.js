load("201224b0d1c296b45befd2285e95dd42.js");
load("6ec98b17981f95f4363b8bc9869495e2.js");

function TestCase(n, d, e, a) {
  this.name=n;
  return n;
}

function reportCompare (expected, actual, description) {
  new TestCase
}

reportCompare(true, "isGenerator" in Function, "Function.prototype.isGenerator present");
var p = new Proxy({}, {});
function test() {
    TestCase.prototype.__proto__=null
    if (new TestCase)
        TestCase.prototype.__proto__=p
}
test();
new TestCase;
test()
