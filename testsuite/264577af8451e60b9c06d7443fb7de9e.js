load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

// Symbols can't be WeakMap keys.
var m = new WeakMap;
var sym = Symbol();
assertThrowsInstanceOf(() => m.set(sym, 0), TypeError);

if (typeof reportCompare === "function")
  reportCompare(0, 0);
