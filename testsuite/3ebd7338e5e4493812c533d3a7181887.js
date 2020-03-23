load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests functions that use 'arguments' in both an aliased and a non-aliased way."
);

function foo() {
    var result = 0;
    var a = arguments;
    for (var i = 0; i < a.length; ++i)
        result += arguments[i];
    return result;
}

function bar(x) {
    return foo(x);
}

dfgShouldBe(bar, "bar(42)", "42");

load("cf1a0efae1078faee510f7bda78d4902.js");
