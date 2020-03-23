load("e2371540d876710daf38e749390aa2a3.js");
description(
"Regression test for https://webkit.org/b/148411. This test should not crash."
);

function foo()
{
    [5, 6, 7, 8];
    [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114];
}

for (var i = 0; i < 100000; ++i)
    foo();

load("cf1a0efae1078faee510f7bda78d4902.js");
