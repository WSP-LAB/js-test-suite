load("e2371540d876710daf38e749390aa2a3.js");
description("Test for error messages on function.apply");

shouldThrow("function foo(){}; foo.apply(null, 20)");
shouldThrow("function foo(){}; foo.apply(null, 'hello')");
shouldThrow("function foo(){}; foo.apply(null, true)");

load("cf1a0efae1078faee510f7bda78d4902.js");
