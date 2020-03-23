load("e2371540d876710daf38e749390aa2a3.js");
description(
"Check that the DFG can handle MakeRope or ValueAdd on all empty strings."
);

function foo(a, b) {
    return a + b;
}

function bar() {
    return foo("", "");
}

for (var i = 0; i < 100; ++i)
    shouldBe("bar()", "\"\"");


load("cf1a0efae1078faee510f7bda78d4902.js");
