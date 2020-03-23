load("201224b0d1c296b45befd2285e95dd42.js");
function getprop (obj) {
  return obj.nonexist;
}

for (var n = 0; n < 100; n++) {
  var a = (n % 2) ? ((n % 3) ? new Object() : new Object()) : new Object();
  getprop(a);
}
