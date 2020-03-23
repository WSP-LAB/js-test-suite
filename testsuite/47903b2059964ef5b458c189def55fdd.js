load("e2371540d876710daf38e749390aa2a3.js");
description("Regression test for https://webkit.org/b/142625. This test should not crash.");

for (var i = 0; i < 10000; i++)
    eval("function fuzz() {}");

testPassed("Eval of DFG compiled function didn't crash");

load("cf1a0efae1078faee510f7bda78d4902.js");
