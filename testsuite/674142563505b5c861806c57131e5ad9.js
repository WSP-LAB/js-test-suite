load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Author: Tom Schuster
 */

JSON.stringify(new Boolean(false), function(k, v) { 
    assertEq(typeof v, "object"); 
});

assertEq(Boolean.prototype.hasOwnProperty('toJSON'), false);

Object.prototype.toJSON = function() { return 2; };
assertEq(JSON.stringify(new Boolean(true)), "2");

if (typeof reportCompare === 'function')
    reportCompare(true, true);
