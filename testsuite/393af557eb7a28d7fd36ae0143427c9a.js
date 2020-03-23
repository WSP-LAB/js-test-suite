load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
var ta = new Uint8Array(1);
ta[0] = 17;

assertEq(ta.lastIndexOf(17, -0), +0);

if (typeof reportCompare === "function")
  reportCompare(true, true);
