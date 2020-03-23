load("e2371540d876710daf38e749390aa2a3.js");
description(
"This tests that an identity node in the inlined function does not crash the DFG's code generator."
);

var o = {
    x1: 0,
    x2: 0,
    x3: 0,
    toKey: function() {
        return this.x1 + "," + this.x2 + "," + this.x3;
    },
};

var a = [];

var x1Adjust = 1.3;
var x2Adjust = 2.7;
var x3Adjust = 1.2;

function foo(i) {
    o.x1 += x1Adjust;
    o.x2 += x2Adjust;
    o.x3 += x3Adjust;

    a[i] = o.toKey();
}

function test() {
    for (var i = 0; i < 1000; i++)
        foo(i);
}

test();

var successfullyParsed = true;

load("cf1a0efae1078faee510f7bda78d4902.js");
