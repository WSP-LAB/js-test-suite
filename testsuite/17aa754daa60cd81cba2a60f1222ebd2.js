load("e2371540d876710daf38e749390aa2a3.js");
description("Tests to make sure we call forEach callback with right arguments");
var s = new Set();
s.add('value');
var called = false;
var receiver = { receiver: true };
var actual = {};
s.forEach(function (value, key, set) {
    called = true;
    actual.value = value;
    actual.key = key;
    actual.set = set;
    actual.receiver = this;
}, receiver);
shouldBeTrue("called");
shouldBe("actual.value", "'value'");
shouldBe("actual.key", "'value'");
shouldBe("actual.set", "s");
shouldBeTrue("actual.receiver === receiver");

load("cf1a0efae1078faee510f7bda78d4902.js");
