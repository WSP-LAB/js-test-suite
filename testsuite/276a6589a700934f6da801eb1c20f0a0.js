load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
// This is super weird. A super property reference in the spec contains two
// things. The first is the object to do the lookup on, the super base. This
// should be unchanged, no matter what's going on: I can move the method to
// another object. I can pull it out as its own function. I can put it on my
// head and run around the front yard. No changes. The other half, the |this|
// for invoked calls, is the this at the time of referencing the property, which
// means it's gonna vary wildly as stuff gets moved around.

class base {
    constructor() { }
    test(expectedThis) { assertEq(this, expectedThis); }
}

class derived extends base {
    constructor() { super(); }
    test(expected) { super.test(expected); }
    testArrow() { return (() => super.test(this)); }
    ["testCPN"](expected) { super.test(expected); }
}

let derivedInstance = new derived();
derivedInstance.test(derivedInstance);
derivedInstance.testCPN(derivedInstance);

let obj = { test: derivedInstance.test };
obj.test(obj);

let testSolo = derivedInstance.test;
// Hah! The engine is not prepared for non-object receivers, since this couldn't
// happen before. Hope Waldo fixes this soon as he claims he will :)
assertThrowsInstanceOf(() =>testSolo(undefined), TypeError);

let anotherObject = { };
derivedInstance.test.call(anotherObject, anotherObject);

let strThis = "this is not an object!";
derivedInstance.test.call(strThis, strThis);

// You can take the arrow function out of the super, ... or something like that
let arrowTest = derivedInstance.testArrow();
arrowTest();

// There's no magic "super script index" per code location.
class base1 {
    constructor() { }
    test() { return "llama"; }
}
class base2 {
    constructor() { }
    test() { return "alpaca"; }
}

let animals = [];
for (let exprBase of [base1, base2])
    new class extends exprBase {
        constructor() { super(); }
        test() { animals.push(super["test"]()); }
    }().test();
assertDeepEq(animals, ["llama", "alpaca"]);

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
