load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var x;
try {
    eval("var {if} = {'if': 1};");
} catch (exc) {
    x = exc;
}
assertEq(x instanceof SyntaxError, true);
assertEq("if" in this, false);

x = undefined;
try {
    Function("var {if} = {'if': 1};");
} catch (exc) {
    x = exc;
}
assertEq(x instanceof SyntaxError, true);

reportCompare(0, 0, 'ok');
