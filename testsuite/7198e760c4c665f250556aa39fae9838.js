load("e2371540d876710daf38e749390aa2a3.js");
description("Verify that we don't use our caller's arguments object in an inlined function.");

function bar(x) {
    var t = arguments;
    var a = x;
    return a;
}

function foo(x) {
    var t = arguments;
    var a = x;
    return bar(1);
}

noInline(foo);

function test() {
    for (var i = 0; i < 10000; ++i) {
        var result = foo(42);
        if (result != 1) {
            testFailed("Expected 1, but got " + result);
            return false;
        }
    }
    return true;
}

if (test())
   testPassed("Correctly accessed inlined callee's own arguments");

load("cf1a0efae1078faee510f7bda78d4902.js");
