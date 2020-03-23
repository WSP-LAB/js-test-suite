load("201224b0d1c296b45befd2285e95dd42.js");
function trees() {
  var i = 0, o = [0,0,0];
  for (i = 0; i < 100; ++i) {
    if ((i & 1) == 0) o[0]++;
    else if ((i & 2) == 0) o[1]++;
    else o[2]++;
  }
  return String(o);
}
assertEq(trees(), "50,25,25");
