load("201224b0d1c296b45befd2285e95dd42.js");
// don't crash

var q;

function f() {
  while (arguments.length > 0) {
    q = arguments[arguments.length-1];
    arguments.length--;
  }
}

f(1, 2, 3, 4, 5);
