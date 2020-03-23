load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that the DFG doesn't crash if we constant fold the first read of a local variable in a block that is the result of merging two blocks, where the first doesn't touch the local and the second reads it."
);

function foo(x, y) {
    var o = {};
    if (y == 5) {
        o.f = 42;
    }
    var z = o.f;
    if (x == 5) {
        if (y == 5) {
            return z;
        }
    }
}

function bar(x) {
    return foo(x, 5);
}

dfgShouldBe(bar, "bar(5)", "42");

load("cf1a0efae1078faee510f7bda78d4902.js");
