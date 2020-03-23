load("e2371540d876710daf38e749390aa2a3.js");
description(
"Offset and lineNumber of the savePoint needs to restored before calling next(). Test passes if there is no crash in debug builds.");

((x = (function(){ return debug;})()
, y) => [])();

load("cf1a0efae1078faee510f7bda78d4902.js");
