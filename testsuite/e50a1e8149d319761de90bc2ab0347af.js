load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that Math.cos() on a constant works in the DFG."
);

function foo() { return Math.cos(0); }

dfgShouldBe(foo, "foo()", "1");

load("cf1a0efae1078faee510f7bda78d4902.js");
