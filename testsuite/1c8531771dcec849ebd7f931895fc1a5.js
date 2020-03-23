load("201224b0d1c296b45befd2285e95dd42.js");
var g = newGlobal();
g.eval("this.inner = getSelfHostedValue('outer')()");
gc();
g.inner();
