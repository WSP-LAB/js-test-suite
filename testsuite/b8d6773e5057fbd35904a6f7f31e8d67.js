load("201224b0d1c296b45befd2285e95dd42.js");
if (helperThreadCount() == 0)
  quit();

function eval(source) {
    offThreadCompileModule(source);
    let m = finishOffThreadModule();
    m.declarationInstantiation();
    return m.evaluation();
}
function runTestCase(testcase) {
    if (testcase() !== true) {}
}
eval(`
  function testcase() {
    function set () {}
  }
  runTestCase(testcase);
`);
