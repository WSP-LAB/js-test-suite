load("201224b0d1c296b45befd2285e95dd42.js");
var lfcode = new Array();
lfcode.push("");
lfcode.push("print('hi');");
while (true) {
        var file = lfcode.shift(); if (file == undefined) { break; }
        loadFile(file);
}
function loadFile(lfVarx) {
        evaluate(lfVarx);
}
