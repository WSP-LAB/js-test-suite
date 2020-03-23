load("201224b0d1c296b45befd2285e95dd42.js");
var lfcode = new Array();
lfcode.push("");
lfcode.push("0");
lfcode.push("newGlobal(\"1\").eval(\"(new Debugger).addAllGlobalsAsDebuggees();\");\n");
while (true) {
    var file = lfcode.shift(); if (file == undefined) { break; }
    loadFile(file)
}
function loadFile(lfVarx) {
    try {
      if (lfVarx.substr(-3) != ".js" && lfVarx.length != 1) {
        evaluate(lfVarx); 
      } else if (!isNaN(lfVarx)) {}
    } catch (lfVare) {    }
}
