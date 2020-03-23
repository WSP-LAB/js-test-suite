load("e2371540d876710daf38e749390aa2a3.js");
description("Test to ensure correct handling of --> as a single line comment when at the beginning of a line");

shouldThrow("'should be a syntax error' -->");
shouldThrow("/**/ 1 -->");
shouldThrow("1 /**/ -->");
shouldThrow("1/*\n*/-->");

shouldBeUndefined("-->");
shouldBeUndefined("/**/-->");
shouldBeUndefined("/*\n*/-->");

load("cf1a0efae1078faee510f7bda78d4902.js");
