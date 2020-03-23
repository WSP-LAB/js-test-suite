load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
function f() {
  eval("(function() \n{\nfor(x in[])\n{}\n})");
  ("")()
}
f()

