load("201224b0d1c296b45befd2285e95dd42.js");
// Compiling a script with null filename does not break the Error constructor.

var exc = null;
try {
    evaluate("throw Error('pass');", {fileName: null});
} catch (x) {
    exc = x;
}
assertEq(exc.constructor, Error);
assertEq(exc.message, "pass");
assertEq(exc.fileName, "");
