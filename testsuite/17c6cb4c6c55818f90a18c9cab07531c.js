load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError

function* of([d] = eval("var MYVAR=new String('0Xf');++MYVAR"), ...get) { var x = 42;}
of();
