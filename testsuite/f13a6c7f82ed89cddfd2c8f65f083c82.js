load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError

function f() {    }
function g() {    }
var x = [f,f,f,undefined,g];
for (var i = 0; i < 5; ++i)
  y = x[i]("x");
