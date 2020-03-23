load("201224b0d1c296b45befd2285e95dd42.js");

function foo(x,n) {
  for (var i = -5; i < n; i++) {
    x[i] = 10;
  }
}
foo([1,2,3,4,5],5);
