load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:ReferenceError
toPrinted(this.reason);
function toPrinted(value) {
  return value = String(value);
}
var lfcode = new Array();
lfcode.push = loadFile;
lfcode.push("enableTrackAllocations();");
lfcode.push("\
gczeal(9, 2);\
newGlobal();\
''.addDebuggee(g1);\
");
function loadFile(lfVarx) {
  evaluate(lfVarx, { noScriptRval : true, isRunOnce : true }); 
}
