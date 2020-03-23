load("e2371540d876710daf38e749390aa2a3.js");
description(
'Test for ES6 RegExp construct a new RegExp from exiting RegExp pattern and new flags'
);

var re = new RegExp("Abc");
shouldBeTrue('re.test("   Abc   ")');
shouldBe('re.flags', '""');

re = new RegExp(re, "i");
shouldBeTrue('re.test(" ABC  ")');
shouldBe('re.flags', '"i"');

re = new RegExp(re, "");
shouldBeTrue('re.test("   Abc   ")');
shouldBe('re.flags', '""');

re = new RegExp(re, "iy");
shouldBe('re.exec("abcABCAbc").toString()', '"abc"');
shouldBe('re.exec("abcABCAbc").toString()', '"ABC"');
shouldBe('re.exec("abcABCAbc").toString()', '"Abc"');
shouldBe('re.flags', '"iy"');

re = new RegExp(re, "");
shouldBeFalse('re.test("abc")');

shouldThrow('new RegExp(re, "bad flags")', '"SyntaxError: Invalid flags supplied to RegExp constructor."');

load("cf1a0efae1078faee510f7bda78d4902.js");
