load("e2371540d876710daf38e749390aa2a3.js");
description('Tests for ES6 arrow function nested declaration');

debug("af = a => b => a")
var af = a => b => a;

shouldBe("af('ABC')('DEF')", "'ABC'");

var successfullyParsed = true;

load("cf1a0efae1078faee510f7bda78d4902.js");
