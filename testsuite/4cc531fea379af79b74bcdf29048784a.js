load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
// Super property (and calls) works in non-extending classes and object
// litterals.
class toStringTest {
    constructor() {
        // Install a property to make it plausible that it's the same this
        this.foo = "rhinoceros";
    }

    test() {
        assertEq(super.toSource(), super["toSource"]());
        assertEq(super.toSource(), this.toSource());
    }
}

new toStringTest().test();

let toStrOL = {
    test() {
        assertEq(super.toSource(), super["toSource"]());
        assertEq(super.toSource(), this.toSource());
    }
}

toStrOL.test();

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
