load("e2371540d876710daf38e749390aa2a3.js");
description("Regression test for https://webkit.org/b/150220.");

// This test verifies that a tail call from a constructor doesn't crash and works correctly.

function Obj(name) {
    "use strict";
    this.name = name;
}

function SubObj(name) {
    "use strict";
    return Obj.apply(this, arguments);
}

for (var i = 0; i < 10000; i++) {
    if (new SubObj("Test").name != "Test")
        testFailed("Object doesn't have property \"name\" with value of \"Test\"");
}

testPassed("Properly handled a tail call from a constructor.");

load("cf1a0efae1078faee510f7bda78d4902.js");
