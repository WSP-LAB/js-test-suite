load("e2371540d876710daf38e749390aa2a3.js");
description(
"This test ensures that repeated use of the vm reentry cache does not eventually consume the entire register file."
);
var anArray = [1,2,3,4,5];
shouldBe("for(var i = 0; i < 50000; i++) anArray.sort(function(){ return 1; })", "[1,2,3,4,5]");

load("cf1a0efae1078faee510f7bda78d4902.js");
