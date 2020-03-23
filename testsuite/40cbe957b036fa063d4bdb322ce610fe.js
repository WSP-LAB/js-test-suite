load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
load("e2c808509c360663d6364e14c187fc8f.js");

eval("var x; typeof x")
Array.prototype[Symbol.iterator] = function () { for(y in x); };
for (var v of ['a', 'b', 'c', 'd'])
    s = v;
