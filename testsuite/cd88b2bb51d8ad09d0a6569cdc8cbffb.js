load("e2371540d876710daf38e749390aa2a3.js");
description(
"This tests ensures that the DFG StackLayoutPhase is only accessing a union'ed calleeVariable. This test should not crash."
);

// Regression test for <https://webkit.org/b/130566>.
function test()
{
    function doTest() {
        (function foo(a) {
            if (a > 0) {
                foo(a  - 1);
            }
        }) (424);
    }

    for (var i = 0; i < 1000; i++) {
        try {
            doTest();
        } catch(runError) {
        }
    }
}

test();

load("cf1a0efae1078faee510f7bda78d4902.js");
