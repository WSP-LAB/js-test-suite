load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("fec05e691cc28279400c1df89b47a7cf.js");
var BUGNUMBER = 918987;
var summary = 'String.prototype.normalize - normalize rope string';

print(BUGNUMBER + ": " + summary);

function test() {
  /* JSRope test */
  var a = "";
  var b = "";
  for (var i = 0; i < 100; i++) {
    a += "\u0100";
    b += "\u0041\u0304";
  }
  assertEq(a.normalize("NFD"), b);
}

if ("normalize" in String.prototype) {
  // String.prototype.normalize is not enabled in all builds.
  test();
}

if (typeof reportCompare === "function")
  reportCompare(true, true);
