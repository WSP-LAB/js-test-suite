load("201224b0d1c296b45befd2285e95dd42.js");
// This testcase tests setting object metadata for objects created from JIT
// code.
if (!("getJitCompilerOptions" in this))
  quit();
opts = getJitCompilerOptions();
if (!opts['ion.enable'] || !opts['baseline.enable'])
  quit();

function TestCase() {}
function reportCompare () {
  var output = "";
  var testcase = new TestCase();
  testcase.reason = output;
}
reportCompare();
gczeal(4, 1000);
enableShellAllocationMetadataBuilder();
for (var i = 0; i < 10000; ++i)
  reportCompare();
