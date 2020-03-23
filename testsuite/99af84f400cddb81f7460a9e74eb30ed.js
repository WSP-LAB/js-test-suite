load("e2371540d876710daf38e749390aa2a3.js");
description(
"This tests that ToString(Symbol) behaviors."
);

shouldBeEqualToString("String(Symbol.iterator)", "Symbol(Symbol.iterator)");
shouldThrow("String(Symbol.prototype)", `"TypeError: Symbol.prototype.valueOf requires that |this| be a symbol or a symbol object"`);
shouldBeEqualToString("Symbol.prototype.toString.call(Symbol.iterator)", "Symbol(Symbol.iterator)");
shouldBeEqualToString("Symbol.prototype.toString.call(Symbol('hello'))", "Symbol(hello)");
shouldBeEqualToString("Symbol.prototype.toString.call(Symbol())", "Symbol()");
shouldBeEqualToString("Object.prototype.toString.call(Symbol())", "[object Symbol]");
shouldBeEqualToString("Object.prototype.toString.call(Symbol.prototype)", "[object Symbol]");
shouldBeEqualToString("Object.prototype.toString.call(Symbol)", "[object Function]");

successfullyParsed = true;

load("cf1a0efae1078faee510f7bda78d4902.js");
