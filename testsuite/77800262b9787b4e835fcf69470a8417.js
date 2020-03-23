load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
class Base {
    constructor() {}
}
class Mid extends Base {
    constructor() { super(); }
    f() { return new super.constructor(); }
}
class Derived extends Mid {
    constructor() { super(); }
}

let d = new Derived();
var df = d.f();
assertEq(df.constructor, Base);

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
