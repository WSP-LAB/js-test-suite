load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("f1d590df6c82187c88fd85aaf83a74be.js");
// Properties of Math.asinh that are guaranteed by the spec.

// If x is NaN, the result is NaN.
assertEq(Math.asinh(NaN), NaN);

// If x is +0, the result is +0.
assertEq(Math.asinh(+0), +0);

// If x is −0, the result is −0.
assertEq(Math.asinh(-0), -0);

// If x is +∞, the result is +∞.
assertEq(Math.asinh(Infinity), Infinity);

// If x is −∞, the result is −∞.
assertEq(Math.asinh(-Infinity), -Infinity);


reportCompare(0, 0, "ok");
