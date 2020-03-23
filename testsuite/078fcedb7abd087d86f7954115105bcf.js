load("201224b0d1c296b45befd2285e95dd42.js");
gczeal(4);
function blah() {
  var i = 1;
  function o() {}
  function k() { i++; }
  o.x = 0;
  for (var j = 0; j < 100; ++j) {
      i = {a: o, b: k};
      i++;
  }
}
blah();
