load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that the (x/0)|0 case in the DFG is handled correctly even when there is some interesting register allocation going on."
);

function foo(c, d, a, b) {
    return (c + d) + ((a / b) | 0);
}

noInline(foo);
silentTestPass = true;

for (var i = 0; i < 100; i = dfgIncrement({f:foo, i:i + 1, n:50}))
    shouldBe("foo(0, 0, " + i + ", 0)", "0");


load("cf1a0efae1078faee510f7bda78d4902.js");
