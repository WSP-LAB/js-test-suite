load("201224b0d1c296b45befd2285e95dd42.js");
load("6ec98b17981f95f4363b8bc9869495e2.js");

if (globalPrototypeChainIsMutable())
  this.__proto__ = null;

gczeal(2);
gc();
var box = evalcx('lazy');
