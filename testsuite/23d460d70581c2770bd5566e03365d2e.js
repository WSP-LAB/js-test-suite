load("201224b0d1c296b45befd2285e95dd42.js");
var lfcode = new Array();
lfcode.push = loadFile;
lfcode.push("");
lfcode.push("");
lfcode.push("3");
lfcode.push("");
lfcode.push("");
lfcode.push("");
lfcode.push("");
lfcode.push("4");
lfcode.push("");
lfcode.push("0");
lfcode.push("gczeal(2);");
lfcode.push("\
    var g = newGlobal();\
    g.parent = this;\
    g.eval('new Debugger(parent).onExceptionUnwind = function() {};');\
    ");
function loadFile(lfVarx) {
  evaluate(lfVarx);
}
