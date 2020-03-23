load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom; need-for-each

if (!('gczeal' in this && 'oomAfterAllocations' in this))
    quit();

var lfcode = new Array();
gczeal(14);
loadFile(`
for each(let e in newGlobal()) {
    if (oomAfterAllocations(100))
        continue;
}
`);
function loadFile(lfVarx) {
    for (lfLocal in this) {}
    evaluate(lfVarx);
}
