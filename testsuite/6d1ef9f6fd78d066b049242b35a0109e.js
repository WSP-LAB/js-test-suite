load("201224b0d1c296b45befd2285e95dd42.js");
load("6ec98b17981f95f4363b8bc9869495e2.js");

Object.prototype.length = 0;
if (globalPrototypeChainIsMutable())
    this.__proto__ = [];

function f() {
    eval('Math');
    length = 2;
}
f();
