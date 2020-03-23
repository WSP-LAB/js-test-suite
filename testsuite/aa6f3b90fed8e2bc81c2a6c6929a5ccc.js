load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = '666,';

function h() {
  var ans = 0;
  for (var i = 0; i < arguments.length; ++i) {
    ans += arguments[i];
  }
  return ans;
}

var q = h(600, 60, 6);
appendToActual(q);


assertEq(actual, expected)
