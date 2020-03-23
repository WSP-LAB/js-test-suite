load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

loadFile("");
loadFile("");
loadFile(` function lalala() {}
    new Map([[1, 2]]).forEach(lalala)
    `);
function loadFile(lfVarx) {
    return oomTest(function() {
        eval(lfVarx)
    });
}
