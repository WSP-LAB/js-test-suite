load("201224b0d1c296b45befd2285e95dd42.js");
load("c87c456240a1d89aa2414cb9d34d87f5.js");
var test = "";

// code a constant.
test = "1;";
evalWithCache(test, { assertEqBytecode: true, assertEqResult : true });

// code a string constant.
test = "'string';";
evalWithCache(test, { assertEqBytecode: true, assertEqResult : true });

// code a global variable access.
test = "generation;";
evalWithCache(test, { assertEqBytecode: true });

// code an object constant.
test = "var obj = { a: 1, b: 2 };";
evalWithCache(test, { assertEqBytecode: true, assertEqResult : true });

// code object literal with mutations.
test = "var obj = { a: 1, b: 2 }; obj.a++; assertEq(obj.a, 2);";
evalWithCache(test, { assertEqBytecode: true, assertEqResult : true });

// code object literals with mutations.
test = "var obj = { a: 1, b: { c: 3, d: 4 } }; obj.b.c++; assertEq(obj.b.c, 4);";
evalWithCache(test, { assertEqBytecode: true, assertEqResult : true });

// code a function which is used.
test = "function f() { return 1; }; f();";
evalWithCache(test, { assertEqBytecode: true, assertEqResult : true });

// code a function which is not used.
test = "function f() { return 1; }; 1;";
evalWithCache(test, { assertEqBytecode: true, assertEqResult : true });

// code a function which has an object literal.
test = "function f() { return { x: 2 }; }; f();";
evalWithCache(test, { assertEqBytecode: true });

// code call site object
test = "function f(a) { return a; }; f`a${4}b`;";
evalWithCache(test, { assertEqBytecode: true, checkFrozen: true});
