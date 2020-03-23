load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var BUGNUMBER = 887016;
var summary = "RegExpExec should throw if returned value is not an object nor null.";

print(BUGNUMBER + ": " + summary);

for (var ret of [null, {}, [], /a/]) {
  assertEq(RegExp.prototype[Symbol.match].call({
    get global() {
      return false;
    },
    exec(S) {
      return ret;
    }
  }, "foo"), ret);
}

for (ret of [undefined, 1, true, false, Symbol.iterator]) {
  assertThrowsInstanceOf(() => {
    RegExp.prototype[Symbol.match].call({
      get global() {
        return false;
      },
      exec(S) {
        return ret;
      }
    }, "foo");
  }, TypeError);
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
