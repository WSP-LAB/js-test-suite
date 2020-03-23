load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that array popping properly cleans up the popped element."
);

function foo(a) {
    var x = a.pop();
    a[a.length + 1] = 42;
    return [x, a.pop(), a.pop()];
}

dfgShouldBe(foo, "foo([1, 2])", "[2,42,,]");

load("cf1a0efae1078faee510f7bda78d4902.js");
