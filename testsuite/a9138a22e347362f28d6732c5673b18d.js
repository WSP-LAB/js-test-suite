load("201224b0d1c296b45befd2285e95dd42.js");

function bar(x, i) {
  if (i == 50)
    x.length = 0;
}
function foo(x, j, n) {
  for (var i = 0; i < n; i++) {
    bar(x, i);
  }
}
var a = foo([1,2,3,4], 3, 100);
