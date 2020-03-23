load("e2371540d876710daf38e749390aa2a3.js");
description(
"This test checks that the Function constructor detects some syntax errors correctly (bug#59795)."
);

shouldThrow("Function('(i + (j)')", "\"SyntaxError: Unexpected token '}'. Expected ')' to end a compound expression.\"");
shouldThrow("Function('return (i + (j)')", "\"SyntaxError: Unexpected token '}'. Expected ')' to end a compound expression.\"");

load("cf1a0efae1078faee510f7bda78d4902.js");
