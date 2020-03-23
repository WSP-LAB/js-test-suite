load("201224b0d1c296b45befd2285e95dd42.js");

function bar(n) {
  var a;
  if (n < 50)
    a = n;
  return a;
}

function foo() {
  for (var i = 0; i < 100; i++) {
    var q = bar(i);
    if (i < 50)
      assertEq(q, i);
    else
      assertEq(q, undefined);
  }
}

foo();
