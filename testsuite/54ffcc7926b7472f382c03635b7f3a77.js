load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that an array length access being dead does not result in register allocation failures."
);

function foo(x) {
    var y = x.f.length;
    return 42;
}

dfgShouldBe(foo, "foo({f:[]})", "42");

load("cf1a0efae1078faee510f7bda78d4902.js");
