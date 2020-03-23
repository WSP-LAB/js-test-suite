load("201224b0d1c296b45befd2285e95dd42.js");

function foo(x) {
  for (var i = 0; i < 100; i++) {
    x.f === i;
  }
}
foo({f:"three"});
