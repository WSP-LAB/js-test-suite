load("201224b0d1c296b45befd2285e95dd42.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

// Test off-thread parsing.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

if (helperThreadCount() === 0)
  quit(0);

offThreadCompileScript('Math.sin(Math.PI/2)');
assertEq(runOffThreadScript(), 1);

offThreadCompileScript('a string which cannot be reduced to the start symbol');
assertThrowsInstanceOf(runOffThreadScript, SyntaxError);

offThreadCompileScript('smerg;');
assertThrowsInstanceOf(runOffThreadScript, ReferenceError);

offThreadCompileScript('throw "blerg";');
assertThrowsValue(runOffThreadScript, 'blerg');
