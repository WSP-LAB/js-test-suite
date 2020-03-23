load("201224b0d1c296b45befd2285e95dd42.js");
function f(k) {
  function g(j) {
    return j + k;
  }
  return g;
}

g = f(10);
var ans = '';
for (var i = 0; i < 5; ++i) {
  ans += g(i) + ',';
}

assertEq(ans, '10,11,12,13,14,');

