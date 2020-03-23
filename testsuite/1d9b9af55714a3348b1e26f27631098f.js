load("201224b0d1c296b45befd2285e95dd42.js");

function test1() {
  eval("with (arguments) var arguments = 0;");
}
test1();

function test2() {
  eval("eval('with (arguments) var arguments = 0;')");
}
test2();
