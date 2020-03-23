load("201224b0d1c296b45befd2285e95dd42.js");
var p = new Proxy({}, {
  has : function(id) {}
});
RegExp.prototype.__proto__ = p;
function f() {
  if (/a/.exec("a"))
    return 1;
  return 0;
}
delete RegExp.prototype.test;
f();

