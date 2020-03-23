load("201224b0d1c296b45befd2285e95dd42.js");
function mp(g) {
  ans = ''
  for (var i = 0; i < 5; ++i) {
    ans += g();
  }
  return ans;
}

var f = eval("(function() { var k = 5; function g() { return k; } k = 6; mp(g); delete k; return mp(g); })");
assertEq(f(), "66666");
