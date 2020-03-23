load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

for each(x in [new Number])
    x.__proto__ = []
++x[x]

// don't assert
