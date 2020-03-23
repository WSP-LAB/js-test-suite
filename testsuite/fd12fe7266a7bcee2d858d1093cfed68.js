load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("f1d590df6c82187c88fd85aaf83a74be.js");
// Properties of Math.log1p that are guaranteed by the spec.

// If x is NaN, the result is NaN.
assertEq(Math.log1p(NaN), NaN);

// If x is less than -1, the result is NaN.
assertEq(Math.log1p(-1 - 1e-10), NaN);
assertEq(Math.log1p(-1 - 1e-5), NaN);
assertEq(Math.log1p(-1 - 1e-1), NaN);
assertEq(Math.log1p(-ONE_PLUS_EPSILON), NaN);

for (var i = -2; i > -20; i--)
    assertEq(Math.log1p(i), NaN);

// If x is -1, the result is -∞.
assertEq(Math.log1p(-1), -Infinity);

// If x is +0, the result is +0.
assertEq(Math.log1p(+0), +0);

// If x is −0, the result is −0.
assertEq(Math.log1p(-0), -0);

// If x is +∞, the result is +∞.
assertEq(Math.log1p(Infinity), Infinity);


reportCompare(0, 0, "ok");

