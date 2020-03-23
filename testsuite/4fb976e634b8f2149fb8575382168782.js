load("201224b0d1c296b45befd2285e95dd42.js");
function loop(f) {
  var p;
  for (var i = 0; i < 10; ++i) {
    p = f();
  }
  return p;
}

function f(j, k) {
  var g = function() { return k; }

  var ans = '';

  for (k = 0; k < 5; ++k) {
    ans += loop(g);
  }
  return ans;
}

var t0 = new Date;
var actual = f(1);

assertEq(actual, '01234');
