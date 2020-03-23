load("e2371540d876710daf38e749390aa2a3.js");
description("Check the Date's prototype properties.");

// toGMTString.
shouldBe('Date.prototype.toGMTString', 'Date.prototype.toUTCString');

// toUTCString.
shouldBeEqualToString('Date.prototype.toUTCString.name', 'toUTCString');
shouldBe('Date.prototype.toUTCString.length', '0');
shouldBeEqualToString('typeof Date.prototype.toUTCString', 'function');
shouldBeTrue('Object.getOwnPropertyDescriptor(Date.prototype, "toUTCString").configurable');
shouldBeFalse('Object.getOwnPropertyDescriptor(Date.prototype, "toUTCString").enumerable');
shouldBeTrue('Object.getOwnPropertyDescriptor(Date.prototype, "toUTCString").writable');

load("cf1a0efae1078faee510f7bda78d4902.js");
