load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
// Bug 1227207

var AB = new ArrayBuffer(12);	// Length divides 4
var BC = new ArrayBuffer(14);	// Length does not divide 4

assertThrowsInstanceOf(() => new Int32Array(AB, -1), RangeError); // 22.2.4.5 #8
assertThrowsInstanceOf(() => new Int32Array(AB, 2), RangeError);  // 22.2.4.5 #10
assertThrowsInstanceOf(() => new Int32Array(BC), RangeError);	  // 22.2.4.5 #13.a
assertThrowsInstanceOf(() => new Int32Array(AB, 16), RangeError); // 22.2.4.5 #13.c
assertThrowsInstanceOf(() => new Int32Array(AB, 0, 4), RangeError); // 22.2.4.5 #14.c

if (typeof reportCompare === "function")
    reportCompare(true, true);
