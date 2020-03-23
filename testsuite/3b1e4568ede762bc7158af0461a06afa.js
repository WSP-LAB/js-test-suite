load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("bb5b1529929999e134af01520c18de68.js");
// |reftest| skip-if(!xulRuntime.shell)
// Ensure that exceptions thrown by builder methods propagate.
var thrown = false;
try {
    Reflect.parse("42", { builder: { program: function() { throw "expected" } } });
} catch (e if e === "expected") {
    thrown = true;
}
if (!thrown)
    throw new Error("builder exception not propagated");

if (typeof reportCompare === 'function')
    reportCompare(true, true);
