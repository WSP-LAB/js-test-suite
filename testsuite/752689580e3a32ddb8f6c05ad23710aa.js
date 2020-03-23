load("201224b0d1c296b45befd2285e95dd42.js");
load("6ec98b17981f95f4363b8bc9869495e2.js");

var count = 0;
if (globalPrototypeChainIsMutable()) {
    Object.defineProperty(__proto__, "__iterator__", {
        get: (function() {
            count++;
        })
    });
} else {
    count = 7;
}

if (globalPrototypeChainIsMutable())
    __proto__ = (function(){});

for (var m = 0; m < 7; ++m) {
    for (var a in 6) {}
}

assertEq(count, 7);
