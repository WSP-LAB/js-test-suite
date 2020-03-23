load("e2371540d876710daf38e749390aa2a3.js");
description("This test checks use of the regexp constructor.");

var re = /abc/;

shouldBeTrue("re === RegExp(re)");
shouldBeTrue("re !== new RegExp(re)");
shouldBeTrue("re !== RegExp(re,'i')");
shouldBeTrue("re !== new RegExp(re,'i')");


load("cf1a0efae1078faee510f7bda78d4902.js");
