load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests what happens when you use arguments in strict mode and present the DFG with a tempting optimization opportunity."
);

function f(a) {
    "use strict";
    a = 5;
    return arguments[0];
}

dfgShouldBe(f, "f(1)", "1");

load("cf1a0efae1078faee510f7bda78d4902.js");
