load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that Math.sin() on a constant works in the DFG."
);

function foo() { return Math.sin(0); }

dfgShouldBe(foo, "foo()", "0");

load("cf1a0efae1078faee510f7bda78d4902.js");
