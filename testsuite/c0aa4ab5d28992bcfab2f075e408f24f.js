load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
// Setting a "new" prototype to the current [[Prototype]] value should never fail

var x = {}, t = Object.create(x);
Object.preventExtensions(t);
// Should not fail, because it is the same [[Prototype]] value
Object.setPrototypeOf(t, x);

// Object.prototype's [[Prototype]] is immutable, make sure we can still set null
Object.setPrototypeOf(Object.prototype, null);

reportCompare(true, true);
