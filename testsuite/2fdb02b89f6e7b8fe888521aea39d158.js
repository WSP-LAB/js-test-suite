load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that the (-2147483648/-1)|0 case in the DFG is handled correctly even when there is some interesting register allocation going on."
);

function foo(c, d, a, b) {
    return (c + d) + ((a / b) | 0);
}

dfgShouldBe(foo, "foo(0, 0, -2147483647-1, -1)", "-2147483647-1");


load("cf1a0efae1078faee510f7bda78d4902.js");
