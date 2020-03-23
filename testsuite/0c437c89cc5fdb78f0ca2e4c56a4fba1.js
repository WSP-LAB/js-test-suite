load("201224b0d1c296b45befd2285e95dd42.js");
var w = new WeakMap();
var g = newGlobal();
var k = g.eval('for (var i=0; i<100; i++) new Object(); var q = new Object(); q');
w.set(k, {});
k = null;

gc();
g.eval('q = null');
gc(g);
gc();
