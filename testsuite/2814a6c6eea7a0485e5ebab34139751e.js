load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --ion-pgo=on

if (!('oomTest' in this))
   quit();

oomTest(() => {
    var g = newGlobal();
    g.eval("(function() {})()");
});
