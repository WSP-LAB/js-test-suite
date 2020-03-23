load("e2371540d876710daf38e749390aa2a3.js");
description("Test for error messages for instanceof");

shouldThrow("'instanceof' instanceof    'instanceof'");
shouldThrow("20 instanceof     'hello'  ");
shouldThrow("20 instanceof     {}  ");
shouldThrow("20 instanceof     {}.foo ");
shouldThrow("20 instanceof     true      ");

load("cf1a0efae1078faee510f7bda78d4902.js");
