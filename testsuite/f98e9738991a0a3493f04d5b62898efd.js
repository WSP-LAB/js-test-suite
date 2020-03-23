load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("afaf31a987248a403eda5d5d509d1351.js");
/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

// Reflect.getPrototypeOf returns an object's prototype.
assertEq(Reflect.getPrototypeOf({}), Object.prototype);
assertEq(Reflect.getPrototypeOf(Object.prototype), null);
assertEq(Reflect.getPrototypeOf(Object.create(null)), null);

var proxy = new Proxy({}, {
    getPrototypeOf(t) { return Math; }
});

assertEq(Reflect.getPrototypeOf(proxy), Math);

// For more Reflect.getPrototypeOf tests, see target.js.

reportCompare(0, 0);
