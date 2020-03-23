load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
// basic static method test
class X {
    static count() { return ++this.hits; }
    constructor() { }
}
X.hits = 0;
assertEq(X.count(), 1);

// A static method is just a function.
assertEq(X.count instanceof Function, true);
assertEq(X.count.length, 0);
assertEq(X.count.bind({hits: 77})(), 78);

if (typeof reportCompare === "function")
    reportCompare(0, 0, "OK");
