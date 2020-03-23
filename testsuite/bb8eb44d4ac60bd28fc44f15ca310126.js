load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

loadFile("");
loadFile("");
loadFile("Array.prototype.splice.call(1)");
function loadFile(lfVarx) {
    parseInt("1");
    oomTest(function() {
        eval(lfVarx);
    });
}
