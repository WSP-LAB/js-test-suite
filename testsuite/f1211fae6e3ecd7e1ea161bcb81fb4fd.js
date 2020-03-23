load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 1287525;
var summary = 'String.prototype.split should call ToUint32(limit) before ToString(separator).';

print(BUGNUMBER + ": " + summary);

var accessed = false;

var rx = /a/;
Object.defineProperty(rx, Symbol.match, {
  get() {
    accessed = true;
  }
});
rx[Symbol.split]("abba");

assertEq(accessed, true);

if (typeof reportCompare === "function")
  reportCompare(true, true);
