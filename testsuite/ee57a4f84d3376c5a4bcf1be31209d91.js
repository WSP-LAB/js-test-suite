load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("bb5b1529929999e134af01520c18de68.js");
// |reftest| skip-if(!xulRuntime.shell)
// Bug 632024: no crashing on stack overflow
try {
    Reflect.parse(Array(3000).join("x + y - ") + "z")
} catch (e) { }

if (typeof reportCompare === 'function')
    reportCompare(true, true);
