load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

var lfLogBuffer = `
evalInWorker(\`
        try { oomAfterAllocations(2); } catch(e) {}
    \`);
`;
loadFile("");
loadFile(lfLogBuffer);
function loadFile(lfVarx) {
    oomTest(function() {
        let m = parseModule(lfVarx);
        m.declarationInstantiation();
        m.evaluation();
    });
}
