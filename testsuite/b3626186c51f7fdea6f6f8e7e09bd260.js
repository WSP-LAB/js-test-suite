load("201224b0d1c296b45befd2285e95dd42.js");
// Test off thread module compilation.

if (helperThreadCount() == 0)
    quit();

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("6f4e4ba393ddba3c50ed7efa7b47592d.js");

function offThreadParseAndEvaluate(source) {
    offThreadCompileModule(source);
    let m = finishOffThreadModule();
    m.declarationInstantiation();
    return m.evaluation();
}

offThreadParseAndEvaluate("export let x = 2 * 3;");
