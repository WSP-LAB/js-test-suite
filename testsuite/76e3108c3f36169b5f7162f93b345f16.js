load("201224b0d1c296b45befd2285e95dd42.js");
var caught = false;
try {
    Function("a, @", "");
} catch(e) {
    assertEq(e.toString().search("SyntaxError: malformed formal parameter") == -1, true);
    assertEq(e.toString().search("SyntaxError: illegal character")          == -1, false);
    caught = true;
}
assertEq(caught, true);
