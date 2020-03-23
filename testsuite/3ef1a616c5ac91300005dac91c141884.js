load("e2371540d876710daf38e749390aa2a3.js");
description('Tests for ES6 arrow function, passing arrow function as the paramter');

shouldBe('"" + [1, 2, 3, 4].map(x => x, 32)', "'1,2,3,4'");

var successfullyParsed = true;

load("cf1a0efae1078faee510f7bda78d4902.js");
