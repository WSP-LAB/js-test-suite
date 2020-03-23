load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom
enableGeckoProfiling();
loadFile('\
for (var i = 0; i < 2; i++) {\
    obj = { m: function () {} };\
    obj.watch("m", function () { float32 = 0 + obj.foo; });\
    obj.m = 0;\
}\
');
gcparam("maxBytes", gcparam("gcBytes") + (1)*1024);
newGlobal("same-compartment");
function loadFile(lfVarx) {
  evaluate(lfVarx, { noScriptRval : true, isRunOnce : true }); 
}
