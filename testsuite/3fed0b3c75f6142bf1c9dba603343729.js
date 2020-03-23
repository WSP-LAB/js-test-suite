load("e2371540d876710daf38e749390aa2a3.js");
description("Tests basic correctness of ES Set's keys() API");

shouldBe("Set.prototype.keys.length", "0");
shouldBeTrue("Set.prototype.keys === Set.prototype.values");

load("cf1a0efae1078faee510f7bda78d4902.js");
