load("201224b0d1c296b45befd2285e95dd42.js");
load("6ec98b17981f95f4363b8bc9869495e2.js");

if (globalPrototypeChainIsMutable()) {
  this.__proto__ = null;
  Object.prototype.__proto__ = this;
}

for (var y in Object.prototype)
  continue;
for (var x in this)
  continue;
