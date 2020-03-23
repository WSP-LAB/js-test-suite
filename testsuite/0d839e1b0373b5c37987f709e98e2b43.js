load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("fec05e691cc28279400c1df89b47a7cf.js");
var BUGNUMBER = 918987;
var summary = 'String.prototype.normalize - normalize no String object';

print(BUGNUMBER + ": " + summary);

function test() {
  var myobj = {
    toString: () => "a\u0301",
    normalize: String.prototype.normalize
  };
  assertEq(myobj.normalize(), "\u00E1");
}

if ("normalize" in String.prototype) {
  // String.prototype.normalize is not enabled in all builds.
  test();
}

if (typeof reportCompare === "function")
  reportCompare(true, true);
