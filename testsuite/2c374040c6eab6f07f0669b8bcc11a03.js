load("e2371540d876710daf38e749390aa2a3.js");
shouldBe('"test\
string with CR LF"', '"teststring with CR LF"');

shouldBe('"test\
string with LF CR"', '"teststring with LF CR"');

shouldBe('"test\string with CR"', '"teststring with CR"');

shouldBe('"test\
string with LF"', '"teststring with LF"');

load("cf1a0efae1078faee510f7bda78d4902.js");
