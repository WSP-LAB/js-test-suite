load("201224b0d1c296b45befd2285e95dd42.js");
x = new WeakMap;
x.__proto__ = null;
for (var i = 0; i < 3; i++)
    x.someprop;
gc();
