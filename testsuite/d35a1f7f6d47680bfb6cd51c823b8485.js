load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
class base {
    constructor() { }
    static found() {
        this.foundCalled = true;
    }
    static get accessor() {
        assertEq(this, derived);
        return 45;
    }
    notFound() { }
}

class derived extends base {
    constructor() { }

    static found() { throw "NO!"; }
    static get accessor() { throw "NO!"; }

    static test() {
        assertEq(super["notFound"], undefined);
        super.found();

        // foundCalled is set on |derived| specifically.
        let calledDesc = Object.getOwnPropertyDescriptor(derived, "foundCalled");
        assertEq(calledDesc.value, true);

        assertEq(super.accessor, 45);
    }
}

derived.test();

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
