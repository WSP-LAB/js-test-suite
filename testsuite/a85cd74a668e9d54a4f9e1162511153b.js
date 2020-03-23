load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("6541b3270fb9a4b0727a6347f747112c.js");
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor: Jason Orendorff <jorendorff@mozilla.com>
 */

// Decompile destructuring argument named `arguments` correctly.
var actual = "" + function ([arguments]) {return arguments;};
compareSource('function ([arguments]) {return arguments;}', actual, "part 1");

// Make sure the 'arguments' argument actually works.
var f = function ([arguments]) {return arguments + 1;};
reportCompare(3.25, f([2.25]), "part 2");

// Throw SyntaxError when `arguments` appears twice in a destructuring parameter.
actual = "no exception";
try {
    eval('(function ([arguments, arguments]) {return arguments();})');
} catch (exc) {
    actual = exc.name;
}
reportCompare("SyntaxError", actual, "part 3");

// And again...
actual = "no exception";
try {
    eval('(function ([a, b, arguments, d], [e, f, arguments]) {return arguments();})');
} catch (exc) {
    actual = exc.name;
}
reportCompare("SyntaxError", actual, "part 4");

// The original test case from bug 509354. Don't crash.
try {
    eval('print(function([arguments,arguments,arguments,arguments,arguments,' +
         'arguments,arguments,arguments,arguments,arguments,arguments,' +
         'arguments,arguments,arguments,arguments,arguments]){})');
} catch (exc) {
}
reportCompare("no crash", "no crash", "part 5");

