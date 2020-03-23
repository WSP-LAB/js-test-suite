load("201224b0d1c296b45befd2285e95dd42.js");

function f() {}
new EvalTest();
function EvalTest() {
  with (this) {
    f(EvalTest)
  }
}
evaluate("var obj = new f(1, 'x');");
