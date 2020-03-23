load("e2371540d876710daf38e749390aa2a3.js");
description(
"This test checks whether converting function code to a string preserves semantically significant parentheses."
)

shouldBeTrue("(function () { return (x + y) * z; }).toString().search('return.*[(]') != -1");

load("cf1a0efae1078faee510f7bda78d4902.js");
