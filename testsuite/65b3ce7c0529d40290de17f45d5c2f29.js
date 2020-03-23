load("e2371540d876710daf38e749390aa2a3.js");
description("This test case checks different JSON literal constructions and ensures they handle __proto__ as expected.");

shouldBeTrue("({__proto__:[]}) instanceof Array");

evalResult = eval("({__proto__:[]})");
shouldBeTrue("evalResult instanceof Array");

jsonParseResult = JSON.parse('{"__proto__":[]}');
shouldBeFalse("jsonParseResult instanceof Array");

load("cf1a0efae1078faee510f7bda78d4902.js");
