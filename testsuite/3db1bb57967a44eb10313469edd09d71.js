load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that the DFG handles x % 1, where x is an integer, correctly."
);

function foo(x) { return x % 1; }

dfgShouldBe(foo, "foo(1)", "0");

load("cf1a0efae1078faee510f7bda78d4902.js");
