load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
class foo extends null {
    constructor() {
        // Explicit returns of undefined should act the same as falling off the
        // end of the function. That is to say, they should throw.
        return undefined;
    }
}

for (let i = 0; i < 1100; i++)
    assertThrownErrorContains(() => new foo(), "|this|");

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
