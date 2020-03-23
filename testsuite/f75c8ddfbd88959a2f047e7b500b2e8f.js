load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that a dead use of a variable at the tail of a basic block doesn't confuse the CFA into believing that the variable being used is dead as well."
);

function foo(p, q, v) {
    var x, y;
    if (p)
        x = 0;
    else {
        if (q)
            x = v;
        else
            x = 0;
        y = x;
    }
    if (x)
        return 42;
    return 0;
}

dfgShouldBe(foo, "foo(false, true, 5)", "42");

load("cf1a0efae1078faee510f7bda78d4902.js");
