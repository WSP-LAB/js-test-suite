load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: SyntaxError
s = newGlobal();
evalcx("let NaN = 0;", s);
