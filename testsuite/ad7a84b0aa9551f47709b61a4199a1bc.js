load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
// Since we (for now!) can't emit jitcode for derived class statements. Make
// sure we can correctly invoke derived class constructors.

class foo extends null {
    constructor() {
        // Anything that tests |this| should throw, so just let it run off the
        // end.
    }
}

function intermediate() {
    new foo();
}

for (let i = 0; i < 1100; i++)
    assertThrownErrorContains(intermediate, "|this|");

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
