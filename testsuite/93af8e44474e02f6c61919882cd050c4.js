load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
function base() { this.prop = 42; }

class testInitialize extends base {
    constructor() {
        // A poor man's assertThrowsInstanceOf, as arrow functions are currently
        // disabled in this context
        try {
            this;
            throw new Error();
        } catch (e if e instanceof ReferenceError) { }
        super();
        assertEq(this.prop, 42);
    }
}
assertEq(new testInitialize().prop, 42);

// super() twice is a no-go.
class willThrow extends base {
    constructor() {
        super();
        super();
    }
}
assertThrowsInstanceOf(()=>new willThrow(), ReferenceError);

// This is determined at runtime, not the syntax level.
class willStillThrow extends base {
    constructor() {
        for (let i = 0; i < 3; i++) {
            super();
        }
    }
}
assertThrowsInstanceOf(()=>new willStillThrow(), ReferenceError);

class canCatchThrow extends base {
    constructor() {
        super();
        try { super(); } catch(e) { }
    }
}
assertEq(new canCatchThrow().prop, 42);

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
