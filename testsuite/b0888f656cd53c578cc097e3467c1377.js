load("e2371540d876710daf38e749390aa2a3.js");
description(
"This test makes sure we don't hang we use continue inside a for-of over arguments"
);

function test() {
	var count = 0;
	for (var a of arguments)
		count++;
	return count;
}

shouldBe("test()", "0")
shouldBe("test(1)", "1")
shouldBe("test(1,2)", "2")
shouldBe("test(1,2,3)", "3")

load("cf1a0efae1078faee510f7bda78d4902.js");
