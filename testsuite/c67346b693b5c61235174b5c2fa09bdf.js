load("201224b0d1c296b45befd2285e95dd42.js");
var x = {p: 0.1, m: function(){}};
x.m();  // the interpreter brands x
for (var i = 0; i < 9; i++)
    x.p = 0.1;
