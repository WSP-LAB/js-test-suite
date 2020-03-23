load("201224b0d1c296b45befd2285e95dd42.js");

var appendToActual = function(s) {
    actual += s + ',';
}
gczeal(2,(3));
actual = '';
function loop(f) {}
function f(j, k) {
  var g = function(a, b, c) {}
  for (k = 0; k < 5; ++k)
    appendToActual(loop(g));
}
f(1);
