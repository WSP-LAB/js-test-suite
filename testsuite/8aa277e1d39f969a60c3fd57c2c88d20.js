load("e2371540d876710daf38e749390aa2a3.js");
description("Tests that doing to-this conversion in strict mode doesn't cause us to believe that if the input is an object then the output is also an object.");

function thingy() {
    "use strict";
    function bar() {
        return this instanceof Object;
    }
    function foo() {
        return bar();
    }
    return foo();
}

dfgShouldBe(thingy, "thingy()", "false");

load("cf1a0efae1078faee510f7bda78d4902.js");
