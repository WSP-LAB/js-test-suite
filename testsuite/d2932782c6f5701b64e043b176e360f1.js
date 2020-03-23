load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

if ("evalcx" in this) {
  var sandbox = evalcx("");
  var obj = { get foo() { throw("FAIL"); } };
  var getter = obj.__lookupGetter__("foo");
  var desc = sandbox.Object.getOwnPropertyDescriptor(obj, "foo");
  reportCompare(desc.get, getter, "getter is correct");
  reportCompare(desc.set, undefined, "setter is correct");
}
else {
  reportCompare(true, true);
}
