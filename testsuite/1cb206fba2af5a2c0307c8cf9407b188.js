load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var code;

code =
  "eval('var x = 2; typeof x');";
assertEq(testLenientAndStrict(code, returns("number"), returns("number")),
         true);

code =
  "eval('\"use strict\"; var x = 2; typeof x');";
assertEq(testLenientAndStrict(code, returns("number"), returns("number")),
         true);

code =
  "eval('var x = 2;'); " +
  "typeof x";
assertEq(testLenientAndStrict(code, returns("number"), returns("undefined")),
         true);

code =
  "eval('\"use strict\"; var x = 2;'); " +
  "typeof x";
assertEq(testLenientAndStrict(code, returns("undefined"), returns("undefined")),
         true);

code =
  "eval('\"use strict\"; var x = 2; typeof x'); " +
  "typeof x";
assertEq(testLenientAndStrict(code, returns("undefined"), returns("undefined")),
         true);

code =
  "function test() " +
  "{ " +
  "  eval('var x = 2;'); " +
  "  return typeof x; " +
  "} " +
  "test();";
assertEq(testLenientAndStrict(code, returns("number"), returns("undefined")),
         true);

code =
  "function test() " +
  "{ " +
  "  'use strict'; " +
  "  eval('var x = 2;'); " +
  "  return typeof x; " +
  "} " +
  "test();";
assertEq(testLenientAndStrict(code, returns("undefined"), returns("undefined")),
         true);

code =
  "function test() " +
  "{ " +
  "  eval('\"use strict\"; var x = 2;'); " +
  "  return typeof x; " +
  "} " +
  "test();";
assertEq(testLenientAndStrict(code, returns("undefined"), returns("undefined")),
         true);

reportCompare(true, true);
