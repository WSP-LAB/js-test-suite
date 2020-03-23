load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
// |reftest| skip-if(xulRuntime.shell)
// skip in the shell because 'arguments' is defined as a shell utility function

/* Check we can't delete a var-declared arguments in global space. */
var arguments = 42;
reportCompare(delete arguments, false, "arguments defined as global variable");
