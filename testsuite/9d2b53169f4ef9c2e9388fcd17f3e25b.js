load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

var obj = {};
obj[Symbol.iterator] = 1;
assertEq(obj.toSource(), "({[Symbol.iterator]:1})");
obj[Symbol(undefined)] = 2;
obj[Symbol('ponies')] = 3;
obj[Symbol.for('ponies')] = 4;
assertEq(obj.toSource(),
         '({[Symbol.iterator]:1, [Symbol()]:2, [Symbol("ponies")]:3, [Symbol.for("ponies")]:4})');

if (typeof reportCompare === "function")
    reportCompare(0, 0);
