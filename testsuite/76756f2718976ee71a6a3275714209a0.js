load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
// Make sure we wrap the new target on CCW construct calls.
var g = newGlobal();

let f = g.eval('(function (expected) { this.accept = new.target === expected; })');

for (let i = 0; i < 1100; i++)
    assertEq(new f(f).accept, true);

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
