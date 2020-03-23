load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// |reftest| skip-if(!xulRuntime.shell) -- needs drainJobQueue

var BUGNUMBER = 1185106;
var summary = "Named async function expression should get wrapped function for the name inside it";

print(BUGNUMBER + ": " + summary);

var expr = async function foo() {
  return foo;
};
assertEventuallyEq(expr(), expr);

if (typeof reportCompare === "function")
    reportCompare(true, true);
