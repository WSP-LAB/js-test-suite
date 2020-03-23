load("e2371540d876710daf38e749390aa2a3.js");
description(
"This test checks exceptional cases for constant counting in the parser."
);

const a = 15;
const b = 25;
try {
    --a;
    --b;
} catch(e) { }

if (a !== 15)
    testFailed("Unexpected result for 'a'");
else
    testPassed("'a' is all good");

function f()
{
    const a = 10;
    const b = 20;
    try {
    } catch(e) {
        a--;
        b--;
    }

    return a;
}

shouldBe("f()", "10");

load("cf1a0efae1078faee510f7bda78d4902.js");
