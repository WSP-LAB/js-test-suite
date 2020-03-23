load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
function foo() {
  var ws = new WeakSet();
  ws.add({});
  for (var i = 0; i < 10; i++)
    ws.add(WeakSet + "");
}
foo();
delete Math
