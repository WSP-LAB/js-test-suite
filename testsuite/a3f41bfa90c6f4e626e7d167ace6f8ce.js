load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
 
assertEq(eval(uneval('\x001')), '\x001');

f = eval('(' + (function () { return '\x001'; }).toString() + ')');
assertEq(f(), '\x001');

assertEq(eval('\x001'.toSource()) == '\x001', true);

if (typeof reportCompare === 'function')
  reportCompare(true, true);
