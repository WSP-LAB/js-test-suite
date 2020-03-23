load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests aliased uses of 'arguments' that have an unexpected escape."
);

function baz() {
    return foo.arguments;
}

function foo() {
    var result = 0;
    var a = arguments;
    for (var i = 0; i < a.length; ++i) {
        result += a[i];
        result += baz()[0];
    }
    return result;
}

function bar(x) {
    return foo(x);
}

dfgShouldBe(bar, "bar(42)", "84");

load("cf1a0efae1078faee510f7bda78d4902.js");
