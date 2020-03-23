load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that CheckArray(NonArray) actually proves that the input isn't an array."
);

function foo(a, i) {
    return a[i];
}

function bar(o, p, q) {
    if (q)
        o = 42;
    if (p)
        return o[0];
    else
        return 42;
}

function baz(o, p) {
    var result = foo(o, 0);
    result += bar(o, p, false);
    return result;
}

noInline(baz);

// Get bar's profiling to claim that it sees a particular original array.
for (var i = 0; i < 100; ++i)
    bar(["fizz"], true, false);

while (!dfgCompiled({f:baz})) {
    var o = {};
    o[0] = "buzz";
    baz(o, false);
}

shouldBe("baz([\"blah\"], true)", "\"blahblah\"");


load("cf1a0efae1078faee510f7bda78d4902.js");
