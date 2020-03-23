load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
// new.target is valid in any arrow function not in a global context.
new Function('(() => new.target)()');

// It's also good inside eval, but not global eval
assertThrowsInstanceOf(() => eval('() => new.target'), SyntaxError);

function assertNewTarget(expected) {
    assertEq((()=>new.target)(), expected);
    assertEq(eval('()=>new.target')(), expected);

    // Make sure that arrow functions can escape their original context and
    // still get the right answer.
    return (() => new.target);
}

const ITERATIONS = 550;
for (let i = 0; i < ITERATIONS; i++)
    assertEq(assertNewTarget(undefined)(), undefined);

for (let i = 0; i < ITERATIONS; i++)
    assertEq(new assertNewTarget(assertNewTarget)(), assertNewTarget);

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
