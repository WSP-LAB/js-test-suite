load("201224b0d1c296b45befd2285e95dd42.js");
var g = newGlobal();
g.parent = this;
g.hits = 0;
g.eval("new Debugger(parent).onExceptionUnwind = function () { hits++; };");
function f() {
    var x = f();
}
try {
  f();
} catch (e) {
  assertEq(e instanceof InternalError, true);
} finally {
  assertEq(g.hits, 0);
}
