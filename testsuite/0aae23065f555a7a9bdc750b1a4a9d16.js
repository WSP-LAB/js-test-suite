load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

//-----------------------------------------------------------------------------
var BUGNUMBER = 665961;
var summary =
  "ArrayBuffer cannot access properties defined on the prototype chain.";
print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

ArrayBuffer.prototype.prop = "on prototype";
var b = new ArrayBuffer([]);
assertEq(b.prop, "on prototype");

var c = new ArrayBuffer([]);
assertEq(c.prop, "on prototype");
c.prop = "direct";
assertEq(c.prop, "direct");

assertEq(ArrayBuffer.prototype.prop, "on prototype");
assertEq(new ArrayBuffer([]).prop, "on prototype");

assertEq(c.nonexistent, undefined);

reportCompare(true, true);
