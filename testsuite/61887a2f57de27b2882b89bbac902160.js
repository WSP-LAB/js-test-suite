load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("f1d590df6c82187c88fd85aaf83a74be.js");
// Properties of Math.tanh that are guaranteed by the spec.

// If x is NaN, the result is NaN.
assertEq(Math.tanh(NaN), NaN);

// If x is +0, the result is +0.
assertEq(Math.tanh(+0), +0);

// If x is −0, the result is −0.
assertEq(Math.tanh(-0), -0);

// If x is +∞, the result is +1.
assertEq(Math.tanh(Number.POSITIVE_INFINITY), +1);

// If x is −∞, the result is -1.
assertEq(Math.tanh(Number.NEGATIVE_INFINITY), -1);


reportCompare(0, 0, "ok");
