load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

// JSON.stringify ignores symbol-keyed properties, even enumerable ones.

var obj = {a: 1};
obj[Symbol.for("ponies")] = {toJSON: function () { throw "fit"; }};
obj[Symbol.iterator] = {toJSON: function () { throw "fit"; }};
assertEq(JSON.stringify(obj), '{"a":1}');

var replacer = function (k, v) {
    if (typeof k === "symbol")
        throw "fit";
    return v;
};
assertEq(JSON.stringify(obj, replacer), '{"a":1}');

if (typeof reportCompare === 'function')
    reportCompare(0, 0, 'ok');
