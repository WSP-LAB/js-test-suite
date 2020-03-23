load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
function boundTarget(expected) {
    assertEq(new.target, expected);
}

let bound = boundTarget.bind(undefined);

const TEST_ITERATIONS = 550;

for (let i = 0; i < TEST_ITERATIONS; i++)
    bound(undefined);

for (let i = 0; i < TEST_ITERATIONS; i++)
    new bound(boundTarget);

if (typeof reportCompare === "function")
    reportCompare(0,0,"OK");
