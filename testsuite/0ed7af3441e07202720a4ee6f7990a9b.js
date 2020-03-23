load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests aliased uses of 'arguments' that escape."
);

function foo() {
    var result = 0;
    var a = arguments;
    for (var i = 0; i < a.length; ++i)
        result += a[i];
    return [result, a];
}

function bar(x) {
    var result = foo(x);
    return result[0] * result[1][0];
}

dfgShouldBe(bar, "bar(42)", "1764");

load("cf1a0efae1078faee510f7bda78d4902.js");
