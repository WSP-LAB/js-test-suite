load("e2371540d876710daf38e749390aa2a3.js");
description('Tests a regular expression that hits the recursion limit.');

var complexPattern = "";
for (var i = 0; i < 18; ++i)
    complexPattern += "a?";
for (var i = 0; i < 18; ++i)
    complexPattern += "a";
complexPattern = "\1(" + complexPattern + ")";

var complexInput = "";
for (var i = 0; i < 18; ++i)
    complexInput += "a";

shouldBe('new RegExp(complexPattern + complexPattern).exec(complexInput + complexInput)', 'null'); // Too big

load("cf1a0efae1078faee510f7bda78d4902.js");
