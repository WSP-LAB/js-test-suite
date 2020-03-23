load("e2371540d876710daf38e749390aa2a3.js");
description(
"This tests that the DFG does not attempt to overwrite the activation register with undefined."
);

function g() { 
    (eval("-7") = 0);
}

dfgShouldBe(g, "try { g() } catch (e) { }", "void 0");


load("cf1a0efae1078faee510f7bda78d4902.js");
