load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:Error

if (!isAsmJSCompilationAvailable()) {
    throw new Error('this test expects an error to be thrown, here it is');
    quit();
}

var g = newGlobal();
evaluate("function h() { function f() { 'use asm'; function g() { return 42 } return g } return f }", { global:g});
var h = clone(g.h);
assertEq(h()()(), 42);
