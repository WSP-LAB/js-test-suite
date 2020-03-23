load("201224b0d1c296b45befd2285e95dd42.js");
loadFile("\
saveStack();\
gcPreserveCode = function() {};\
gc();\
saveStack() == 3\
");
function loadFile(lfVarx) {
   evaluate(lfVarx);
}
