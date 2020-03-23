load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
class foo extends null {
    constructor() {
        // Returning a primitive is a TypeError in derived constructors. This
        // ensures that super() can take the return value directly, without
        // checking it. Use |null| here, as a tricky check to make sure we
        // didn't lump it in with the object check, somehow.
        return null;
    }
}

for (let i = 0; i < 1100; i++)
    assertThrownErrorContains(() => new foo(), "return");

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
