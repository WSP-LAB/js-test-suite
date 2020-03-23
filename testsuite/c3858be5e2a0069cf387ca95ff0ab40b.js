load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("fec05e691cc28279400c1df89b47a7cf.js");
var BUGNUMBER = 1145326;
var summary = 'String.prototype.normalize error when normalization form parameter is not an atom';

print(BUGNUMBER + ": " + summary);

function test() {
  assertEq("abc".normalize("NFKC".split("").join("")), "abc");
  assertEq("abc".normalize("NFKCabc".replace("abc", "")), "abc");
  assertEq("abc".normalize("N" + "F" + "K" + "C"), "abc");
}

if ("normalize" in String.prototype) {
  // String.prototype.normalize is not enabled in all builds.
  test();
}

if (typeof reportCompare === "function")
  reportCompare(true, true);
