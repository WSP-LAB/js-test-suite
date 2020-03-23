load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

function loadFile(lfVarx) {
  oomTest(() => eval(lfVarx));
}
for (var i = 0; i < 10; ++i) {
  loadFile(`"use strict"; const s = () => s;`);
}
