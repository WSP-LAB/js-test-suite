load("e2371540d876710daf38e749390aa2a3.js");
// Inspired by mozilla tests
description('Tests for ES6 arrow function instanceof and typeof operators');

var simpleArrowFunction = () => {};

shouldBe("Object.getPrototypeOf(simpleArrowFunction)", "Function.prototype");
shouldBe("simpleArrowFunction instanceof Function", "true");
shouldBe("simpleArrowFunction.constructor == Function", "true");

var successfullyParsed = true;

load("cf1a0efae1078faee510f7bda78d4902.js");
