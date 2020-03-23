load("e2371540d876710daf38e749390aa2a3.js");
description("Regresion test for 158080. This test should pass and not crash.");

shouldThrow("let r = /\\u{|abc/u");
shouldThrow("let r = /\\u{/u");
shouldThrow("let r = /\\u{1/u");
shouldThrow("let r = /\\u{12/u");
shouldThrow("let r = /\\u{123/u");
shouldThrow("let r = /\\u{1234/u");
shouldThrow("let r = /\\u{abcde/u");
shouldThrow("let r = /\\u{abcdef/u");
shouldThrow("let r = /\\u{1111111}/u");
shouldThrow("let r = /\\u{fedbca98}/u");
shouldThrow("let r = /\\u{1{123}}/u");

load("cf1a0efae1078faee510f7bda78d4902.js");
