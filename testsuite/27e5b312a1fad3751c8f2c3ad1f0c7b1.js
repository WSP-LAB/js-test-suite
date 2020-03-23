load("e2371540d876710daf38e749390aa2a3.js");
description('Tests for ES6 arrow function declaration body as block');

var af = a => { a + 1; };

shouldBe("typeof af(0)", '"undefined"');

var successfullyParsed = true;

load("cf1a0efae1078faee510f7bda78d4902.js");
