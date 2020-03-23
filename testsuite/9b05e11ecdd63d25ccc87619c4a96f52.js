load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests effect of mutating Arguments object's structure."
);
function foo() {
	arguments.a=true;
	return arguments.a;
}

dfgShouldBe(foo, "foo()", "true");

load("cf1a0efae1078faee510f7bda78d4902.js");
