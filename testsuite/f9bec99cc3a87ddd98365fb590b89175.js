load("e2371540d876710daf38e749390aa2a3.js");
description("This tests to ensure that destructuring parameters behave like regular locals")

var value="outer"
function readDestructuredParameter([value]) {
    return value;
}

function overwriteDestructuredParameter([value]) {
	value = "inner"
}

function readCapturedDestructuredParameter([value]) {
	return (function () {
	    return value;
	})()
}

function overwriteCapturedDestructuredParameter([value]) {
	(function () {
	    value = "innermost";
	})()
	return value
}

shouldBe("readDestructuredParameter(['inner'])", "'inner'")
overwriteDestructuredParameter(['inner'])

shouldBe("overwriteDestructuredParameter(['unused']); value;", "'outer'")

shouldBe("readCapturedDestructuredParameter(['inner'])", "'inner'")
overwriteDestructuredParameter(['inner'])

shouldBe("overwriteCapturedDestructuredParameter(['unused']);", "'innermost'")
shouldBe("value", "'outer'")


load("cf1a0efae1078faee510f7bda78d4902.js");
