load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
var BUGNUMBER = 1317153;
var summary = "await outside of async function should provide better error";

print(BUGNUMBER + ": " + summary);

let caught = false;
try {
    eval("await 10");
} catch(e) {
    assertEq(e.message, "await is only valid in async functions");
    caught = true;
}
assertEq(caught, true);

if (typeof reportCompare === "function")
    reportCompare(true, true);
