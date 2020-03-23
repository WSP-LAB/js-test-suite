load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that using a value predicted boolean after it is converted to an int32 doesn't crash the compiler while causing bad code gen."
);

function foo(x) {
    return [x << 1, x];
}

dfgShouldBe(foo, "foo(true)", "[2, true]");

load("cf1a0efae1078faee510f7bda78d4902.js");
