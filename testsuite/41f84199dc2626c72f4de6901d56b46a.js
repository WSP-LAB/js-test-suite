load("e2371540d876710daf38e749390aa2a3.js");
//@ skip if $architecture == "arm" and $hostOS == "darwin"

description("This test checks the behavior of the Math.ceil and Math.floor on denormalized FP values.");

shouldBe("Math.ceil(Number.MIN_VALUE)", "1");
shouldBe("Math.ceil(-Number.MIN_VALUE)", "-0");

shouldBe("Math.floor(Number.MIN_VALUE)", "0");
shouldBe("Math.floor(-Number.MIN_VALUE)", "-1");

load("cf1a0efae1078faee510f7bda78d4902.js");
