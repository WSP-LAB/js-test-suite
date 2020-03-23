load("201224b0d1c296b45befd2285e95dd42.js");
function f(x, y) {
  return +(x ? x : y), y >>> 0
}
f(0, -0)
f(0, 2147483649)
