load("e2371540d876710daf38e749390aa2a3.js");
description(
"Tests that our parse-time constant folding treats !(0/0) correctly."
);

shouldBe("!(0/0)", "true");

load("cf1a0efae1078faee510f7bda78d4902.js");
