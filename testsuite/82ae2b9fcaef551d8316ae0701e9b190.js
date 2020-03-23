load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --dump-bytecode

function f() { }
evaluate('function g() { f(); }');
for (var i = 0; i < 2; i++)
    g(0);
