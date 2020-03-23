load("201224b0d1c296b45befd2285e95dd42.js");

try { eval("3 ** 4") } catch (e if e instanceof SyntaxError) { quit(); };

var f = new Function("x", "return (x ** (1 / ~4294967297)) && x");
for (var i = 0; i < 2; ++i) {
    assertEq(f(-Infinity), 0);
}
