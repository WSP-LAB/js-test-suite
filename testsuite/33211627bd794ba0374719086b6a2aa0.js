load("201224b0d1c296b45befd2285e95dd42.js");
// Test 'this' is undefined in modules.

function parseAndEvaluate(source) {
    let m = parseModule(source);
    m.declarationInstantiation();
    return m.evaluation();
}

assertEq(typeof(parseAndEvaluate("this")), "undefined");

let m = parseModule("export function getThis() { return this; }");
m.declarationInstantiation();
m.evaluation();
let f = getModuleEnvironmentValue(m, "getThis");
assertEq(typeof(f()), "undefined");
