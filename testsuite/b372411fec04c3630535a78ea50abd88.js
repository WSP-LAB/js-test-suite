load("e2371540d876710daf38e749390aa2a3.js");
description('Tests for ES6 arrow function nested declaration');

var af1, af2, af3;
af1 = af2 = af3 => af1 = af2 = af3;
debug('af1 = af2 = af3 => af1 = af2 = af3')
shouldBe('af1', 'af2');
af1(13);
shouldBe('af2', '13');
shouldBe('af1', '13');

var successfullyParsed = true;

load("cf1a0efae1078faee510f7bda78d4902.js");
