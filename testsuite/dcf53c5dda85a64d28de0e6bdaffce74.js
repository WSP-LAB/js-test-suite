load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
// Ensure that super lookups and sets skip over properties on the |this| object.
// That is, super lookups start with the superclass, not the current class.

// The whole point: an empty superclass
class base {
    constructor() { }
}

class derived extends base {
    constructor() { super(); this.prop = "flamingo"; }

    toString() { throw "No!"; }

    testSkipGet() {
        assertEq(super.prop, undefined);
    }

    testSkipDerivedOverrides() {
        assertEq(super["toString"](), Object.prototype.toString.call(this));
    }

    testSkipSet() {
        // since there's no prop on the chain, we should set the data property
        // on the receiver, |this|
        super.prop = "rat";
        assertEq(this.prop, "rat");

        // Since the receiver is the instance, we can overwrite inherited
        // properties of the instance, even non-writable ones, as they could be
        // skipped in the super lookup.
        assertEq(this.nonWritableProp, "pony");
        super.nonWritableProp = "bear";
        assertEq(this.nonWritableProp, "bear");
    }
}

Object.defineProperty(derived.prototype, "nonWritableProp", { writable: false, value: "pony" });

let instance = new derived();
instance.testSkipGet();
instance.testSkipDerivedOverrides();
instance.testSkipSet();

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
