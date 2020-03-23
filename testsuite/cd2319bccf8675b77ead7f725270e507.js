load("201224b0d1c296b45befd2285e95dd42.js");
var count = 0;

function f() {
  arguments.length--;
  for (var i = 0; i < arguments.length; ++i) {
    ++count;
  }
}

f(1, 2);
f(1, 2);
f(2, 2);

assertEq(count, 3);
