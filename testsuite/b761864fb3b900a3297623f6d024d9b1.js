load("201224b0d1c296b45befd2285e95dd42.js");
actual = '';
expected = '[object Arguments],[object Arguments],[object Arguments],[object Arguments],[object Arguments],';

function h() {
  return arguments;
}

for (var i = 0; i < 5; ++i) {
  var p = h(i, i*2);
  appendToActual(p);
}


assertEq(actual, expected)
