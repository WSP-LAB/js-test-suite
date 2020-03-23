load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 887016;
var summary = "RegExp.prototype[@@search] should check this value.";

print(BUGNUMBER + ": " + summary);

for (var v of [null, 1, true, undefined, "", Symbol.iterator]) {
  assertThrowsInstanceOf(() => RegExp.prototype[Symbol.search].call(v),
                         TypeError);
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
