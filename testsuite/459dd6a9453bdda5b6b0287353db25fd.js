load("201224b0d1c296b45befd2285e95dd42.js");
// Binary: cache/js-dbg-64-a37127f33d22-linux
// Flags: -m -n
//
load("6ec98b17981f95f4363b8bc9869495e2.js");

a = {};
b = __proto__;
for (i = 0; i < 9; i++) {
    if (globalPrototypeChainIsMutable()) {
        __proto__ = a;
        a.__proto__ = b
    }
}
