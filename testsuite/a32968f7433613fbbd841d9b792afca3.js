load("e2371540d876710daf38e749390aa2a3.js");
description(
"This tests that Symbol.prototype object is ordinary object (not Symbol wrapper object)."
);

shouldThrow("Symbol.prototype.toString.call(Symbol.prototype)", `"TypeError: Symbol.prototype.toString requires that |this| be a symbol or a symbol object"`);
shouldBeEqualToString("Symbol.prototype.toString.call(Symbol.iterator)", "Symbol(Symbol.iterator)");

successfullyParsed = true;

load("cf1a0efae1078faee510f7bda78d4902.js");
