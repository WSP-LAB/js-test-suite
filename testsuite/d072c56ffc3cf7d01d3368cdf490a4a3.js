load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
// Eval of new.target is invalid outside functions.
try {
    eval('new.target');
    assertEq(false, true);
} catch (e if e instanceof SyntaxError) { }

// new.target is invalid inside eval inside top-level arrow functions
assertThrowsInstanceOf(() => eval('new.target'), SyntaxError);

// new.target is invalid inside indirect eval.
let ieval = eval;
try {
    (function () { return ieval('new.target'); })();
    assertEq(false, true);
} catch (e if e instanceof SyntaxError) { }

function assertNewTarget(expected) {
    assertEq(eval('new.target'), expected);
    assertEq((()=>eval('new.target'))(), expected);

    // Also test nestings "by induction"
    assertEq(eval('eval("new.target")'), expected);
    assertEq(eval("eval('eval(`new.target`)')"), expected);
}

const ITERATIONS = 550;
for (let i = 0; i < ITERATIONS; i++)
    assertNewTarget(undefined);

for (let i = 0; i < ITERATIONS; i++)
    new assertNewTarget(assertNewTarget);

if (typeof reportCompare === "function")
    reportCompare(0,0,"OK");
