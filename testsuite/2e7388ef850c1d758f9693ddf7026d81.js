load("e2371540d876710daf38e749390aa2a3.js");
description(
'Test for expressions that would hang when evaluated due to exponential matching behavior. If the test does not hang it is a success.'
);

shouldBe('/(?:[^(?!)]||){23}z/.test("/(?:[^(?!)]||){23}z/")', 'false');

load("cf1a0efae1078faee510f7bda78d4902.js");
