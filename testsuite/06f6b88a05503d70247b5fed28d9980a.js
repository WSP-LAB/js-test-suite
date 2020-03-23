load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

loadFile(`
  function SwitchTest(){
    switch(value) {
      case 0:break
      case isNaN: break
    }
  }
  SwitchTest();
`)
function loadFile(lfVarx) {
  oomTest(function() { return eval(lfVarx); })
}
