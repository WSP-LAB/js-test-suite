load("e2371540d876710daf38e749390aa2a3.js");
description("Test for error messages for in");

shouldThrow("20   in   'in in in'  ");
shouldThrow("20   in   true  ");
shouldThrow("20   in   {}.foo  ");
shouldThrow("20   in   20  ");
shouldThrow("20   in   null  ");

load("cf1a0efae1078faee510f7bda78d4902.js");
