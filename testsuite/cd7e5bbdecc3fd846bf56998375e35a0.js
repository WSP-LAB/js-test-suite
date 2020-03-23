load("e2371540d876710daf38e749390aa2a3.js");
description(
"This test checks that toString() does not have a problem when an object has itself as a property."
);

// Array (elements)
shouldBe("var array = []; array[0] = array; array + ''", "''");

// Error (name, message)
shouldBe("var error = new Error; error.name = error; error.message = error; error + ''", "''");

// RegExp (source)
shouldBe("var regexp = /a/; regexp.source = regexp; regexp + ''", "'/a/'");

load("cf1a0efae1078faee510f7bda78d4902.js");
