load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
// The decompiler can handle the implicit call to @@iterator in a for-of loop.

var x;
function check(code, msg) {
    var s = "no exception thrown";
    try {
        eval(code);
    } catch (exc) {
        s = exc.message;
    }

    assertEq(s, msg);
}

x = {};
check("for (var v of x) throw fit;", "x is not iterable");
check("[...x]", "x is not iterable");
check("Math.hypot(...x)", "x is not iterable");

x[Symbol.iterator] = "potato";
check("for (var v of x) throw fit;", "x is not iterable");

x[Symbol.iterator] = {};
check("for (var v of x) throw fit;", "x[Symbol.iterator] is not a function");

if (typeof reportCompare === "function")
    reportCompare(0, 0, "ok");
