load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
var BUGNUMBER = 1185106;
var summary = "async function toString";

print(BUGNUMBER + ": " + summary);

async function f1(a, b, c) { await a; }

assertEq(f1.toString(),
         "async function f1(a, b, c) { await a; }");

assertEq(async function (a, b, c) { await a; }.toString(),
         "async function (a, b, c) { await a; }");

assertEq((async (a, b, c) => await a).toString(),
         "async (a, b, c) => await a");

assertEq((async (a, b, c) => { await a; }).toString(),
         "async (a, b, c) => { await a; }");

assertEq({ async foo(a, b, c) { await a; } }.foo.toString(),
         "async function foo(a, b, c) { await a; }");

if (typeof reportCompare === "function")
    reportCompare(true, true);
