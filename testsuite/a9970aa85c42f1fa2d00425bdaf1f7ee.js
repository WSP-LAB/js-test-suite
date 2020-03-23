load("e2371540d876710daf38e749390aa2a3.js");
description("Regression test for https://bugs.webkit.org/show_bug.cgi?id=150372.");

// This test should not crash.
var re = /.*(?:(?:(?:(?:(?:(?:)))))).*/;
re.exec("hello");

testPassed("Did not crash.");

load("cf1a0efae1078faee510f7bda78d4902.js");
