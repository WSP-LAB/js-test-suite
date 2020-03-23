load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that Arraify does good things when Object.preventExtensions() has been called."
);

function foo(o) {
    o[0] = 42;
    return o[0];
}

dfgShouldBe(foo, "var o = {}; Object.preventExtensions(o); foo(o)", "void 0");

load("cf1a0efae1078faee510f7bda78d4902.js");
