load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
t = ""
function f(code) {
  eval("(function(){" + code + "})")()
}
evalcx("")
f("var r=({a:1})[\"\"];t(r)")
