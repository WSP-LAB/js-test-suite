load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
class base {
    method() { return 1; }
    *gen() { return 2; }
    static sMethod() { return 3; }
    get answer() { return 42; }
}

// Having a default constructor should work, and also not make you lose
// everything for no good reason

assertEq(Object.getPrototypeOf(new base()), base.prototype);
assertEq(new base().method(), 1);
assertEq(new base().gen().next().value, 2);
assertEq(base.sMethod(), 3);
assertEq(new base().answer, 42);

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
