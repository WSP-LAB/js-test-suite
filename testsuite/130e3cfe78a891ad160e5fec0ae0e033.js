load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

// Don't assert trying to parse any of these.
var a = ["({''})",
         "({''} = {})",
         "var {''};",
         "var {'', a} = {a: 0};",
         "var {'bad'};",
         "({'bad'} = {bad: 0});",
         "var {'if'};",
         "function f({''}) {}",
         "function f({a, 'bad', c}) {}"];

var x;
for (var i = 0; i < a.length; i++) {
    x = undefined;
    try {
        eval(a[i]);
    } catch (exc) {
        x = exc;
    }
    assertEq(x instanceof SyntaxError, true);
}
assertEq("" in this, false);
assertEq("bad" in this, false);
assertEq("if" in this, false);

reportCompare(0, 0, 'ok');
