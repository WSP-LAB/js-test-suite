load("201224b0d1c296b45befd2285e95dd42.js");
load("6ec98b17981f95f4363b8bc9869495e2.js");

var n = 0;
if (globalPrototypeChainIsMutable()) {
  this.__proto__ = new Proxy({}, {
      has: function () {
          if (++n === 2)
              return false;
          a = 0;
      }
  });
  }
a = 0;
assertEq(a, 0);
