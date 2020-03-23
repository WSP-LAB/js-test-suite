load("201224b0d1c296b45befd2285e95dd42.js");
// Binary: cache/js-dbg-32-c5b90ea7e475-linux
// Flags: -m -n -a
//
load("6ec98b17981f95f4363b8bc9869495e2.js");

var save__proto__ = __proto__;
if (globalPrototypeChainIsMutable())
  __proto__ = save__proto__;

function bar(x, y) {
  return x + y;
}
function foo(x, y) {
  var a = 0;
  for (var i = 0; i < 1000; i++) {
    a += (this.toString);
    a += bar(x, y);
    a = bar(x, (a));
    a += bar(x, y);
  }
  return a;
}
var q = foo(0, 1);
print(q.toSource());
