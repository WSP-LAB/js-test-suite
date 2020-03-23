load("e2371540d876710daf38e749390aa2a3.js");
function foo(a, b) {
    return a === b;
}

function test(actual, expected) {
    if (actual !== expected)
        throw new Error("bad result: " + actual);
}

for (var i = 0; i < 10000000; ++i) {
    test(foo(true, null), false);
    test(foo(true, false), false);
    test(foo(true, true), true);
    test(foo(5, "hello"), false);
    test(foo(void 0, new Object()), false);
}

load("cf1a0efae1078faee510f7bda78d4902.js");
