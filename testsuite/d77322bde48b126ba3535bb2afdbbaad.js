load("201224b0d1c296b45befd2285e95dd42.js");

for (var idx = 0; idx < 20; ++idx) {
  newFunc("enableGeckoProfilingWithSlowAssertions(); disableGeckoProfiling();");
}
newFunc("enableGeckoProfiling();");
function newFunc(x) { new Function(x)(); };
