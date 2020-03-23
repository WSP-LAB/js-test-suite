load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that CSE doesn't try to match against a dead GetScopedVar."
);

function foo(a) {
    var x = a;
    return function(p) {
        if (p) {
            var tmp = x;
            return x;
        }
        return 42;
    };
}

dfgShouldBe(foo(0), "foo(i)(false)", "42");


load("cf1a0efae1078faee510f7bda78d4902.js");
