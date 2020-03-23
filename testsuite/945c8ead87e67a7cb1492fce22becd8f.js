load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

lfLogBuffer = `this[''] = function() {}`;
loadFile(lfLogBuffer);
loadFile(lfLogBuffer);
function loadFile(lfVarx) {
    return oomTest(function() { return parseModule(lfVarx); });
}
