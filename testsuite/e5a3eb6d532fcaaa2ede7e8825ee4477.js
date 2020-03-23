load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("fec05e691cc28279400c1df89b47a7cf.js");
var BUGNUMBER = 1287521;
var summary = 'String.prototype.split should call ToUint32(limit) before ToString(separator).';

print(BUGNUMBER + ": " + summary);

var log = [];
"abba".split({
  toString() {
    log.push("separator-tostring");
    return "b";
  }
}, {
  valueOf() {
    log.push("limit-valueOf");
    return 0;
  }
});

assertEq(log.join(","), "limit-valueOf,separator-tostring");

if (typeof reportCompare === "function")
  reportCompare(true, true);
