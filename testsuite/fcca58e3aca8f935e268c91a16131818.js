load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("f1d590df6c82187c88fd85aaf83a74be.js");
// If x is NaN, the result is NaN.
assertEq(Math.sign(NaN), NaN);

// If x is −0, the result is −0.
assertEq(Math.sign(-0), -0);

// If x is +0, the result is +0.
assertEq(Math.sign(+0), +0);

// If x is negative and not −0, the result is −1.
assertEq(Math.sign(-Number.MIN_VALUE), -1);
assertEq(Math.sign(-Number.MAX_VALUE), -1);
assertEq(Math.sign(-Infinity), -1);

for (var i = -1; i > -20; i--)
    assertEq(Math.sign(i), -1);

assertEq(Math.sign(-1e-300), -1);
assertEq(Math.sign(-0x80000000), -1);

// If x is positive and not +0, the result is +1.
assertEq(Math.sign(Number.MIN_VALUE), +1);
assertEq(Math.sign(Number.MAX_VALUE), +1);
assertEq(Math.sign(Infinity), +1);

for (var i = 1; i < 20; i++)
    assertEq(Math.sign(i), +1);

assertEq(Math.sign(+1e-300), +1);
assertEq(Math.sign(0x80000000), +1);
assertEq(Math.sign(0xffffffff), +1);


reportCompare(0, 0, "ok");
