load("201224b0d1c296b45befd2285e95dd42.js");
function f(x) {return x;}
x = f(/abc/);
eval("this.__defineSetter__(\"x\", function(){}); x = 3;");
eval("var BUGNUMBER = 233483;");
