load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
// TypedArray.prototype.sort should work across globals
let g2 = newGlobal();
assertEqArray(
    Int32Array.prototype.sort.call(new g2.Int32Array([3, 2, 1])),
    new Int32Array([1, 2, 3])
);

if (typeof reportCompare === "function")
    reportCompare(true, true);
