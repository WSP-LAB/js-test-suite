load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
// Make sure that we don't ToString the second argument until /after/ doing
// the appropriate subclassing lookups

var didLookup = false;

var re = /a/;
var flags = { toString() { assertEq(didLookup, true); return "g"; } };
var newRe = Reflect.construct(RegExp, [re, flags],
                              Object.defineProperty(function(){}.bind(null), "prototype", {
  get() {
    didLookup = true;
    return RegExp.prototype;
  }
}));

assertEq(Object.getPrototypeOf(newRe), RegExp.prototype);
assertEq(didLookup, true);


if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
