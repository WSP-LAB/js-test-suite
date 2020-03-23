load("201224b0d1c296b45befd2285e95dd42.js");
function a(stdlib) {
  "use asm";
  var imul = stdlib.Math.imul;
  function f() {
    return ((imul(-800, 0xf8ba1243)|0) % -1)|0;
  }
  return f;
}
var f = a(this);
assertEq(f(), 0);
