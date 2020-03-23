load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
// While |super| is common in classes, it also works in object litterals,
// where there is no guarantee of strict mode. Check that we do not somehow
// get strict mode semantics when they were not called for

// |undefined|, writable: false
Object.defineProperty(Object.prototype, "prop", { writable: false });

class strictAssignmentTest {
    constructor() {
        // Strict mode. Throws.
        super.prop = 14;
    }
}

assertThrowsInstanceOf(()=>new strictAssignmentTest(), TypeError);

// Non-strict. Silent failure.
({ test() { super.prop = 14; } }).test();

assertEq(Object.prototype.prop, undefined);

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
