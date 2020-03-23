load("201224b0d1c296b45befd2285e95dd42.js");
expected = 100;
function slice(a, b) {
  return expected--;
}
function f() {
  var length = 8.724e02 ;
  var index = 0;
  function get3() {
    return slice(index, ++index);
  }
  var bytes = null;
  while (bytes = get3()) {  }
}
f();
