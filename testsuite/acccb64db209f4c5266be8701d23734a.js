load("201224b0d1c296b45befd2285e95dd42.js");
load("6ec98b17981f95f4363b8bc9869495e2.js");

function f2() {
    if (globalPrototypeChainIsMutable())
        __proto__ = null;
}

for (var j = 0; j < 50; j++)
    f2();
