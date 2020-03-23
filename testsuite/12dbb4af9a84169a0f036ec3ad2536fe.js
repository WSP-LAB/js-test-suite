load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that the DFG doesn't get confused about an edge being a double edge after we perform CFG simplification."
);

function foo(a, p) {
    var p2;
    var x;
    var y;
    if (p)
        p2 = true;
    else
        p2 = true;
    if (p2)
        x = a;
    else
        x = 0.5;
    if (p2)
        y = a;
    else
        y = 0.7;
    var result = x + y;
    return [result, [x, y], [x, y], [x, y]];
}

dfgShouldBe(foo, "foo(42, true)[0]", "84");

load("cf1a0efae1078faee510f7bda78d4902.js");
