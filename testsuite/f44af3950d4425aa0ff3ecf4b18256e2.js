load("e2371540d876710daf38e749390aa2a3.js");
description("Verify that we don't trash m_currentInstruction with an inlined function.");

function myPush(a, o) {
    a.push(o);
}

function myPop(a) {
    a.pop();
}

function foo(a) {
    myPush(a, 42);
    myPop(a);
    return a.length;
}

noInline(foo);

function test() {
    var myArray = ["one", "two", "three"];

    for (var i = 0; i < 10000; ++i) {
        if (foo(myArray) != 3) {
            testFailed("Array changed unexpectedly");
            return false;
        }
    }
    return true;
}

if (test())
   testPassed("Correctly inlined callee and used m_currentInstruction in caller");

load("cf1a0efae1078faee510f7bda78d4902.js");
