load("e2371540d876710daf38e749390aa2a3.js");
description('Ensures that we correctly propagate the error message for lexer errors containing invalid utf8 code sequences');

shouldThrow('({f("\udead")})');

var successfullyParsed = true;


load("cf1a0efae1078faee510f7bda78d4902.js");
