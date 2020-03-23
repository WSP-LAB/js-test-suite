load("201224b0d1c296b45befd2285e95dd42.js");
function cmp(x, y) {
  if (x < y)
    return -1;
  if (x > y)
    return 1;
  return 0;
}
assertEq(cmp('true', 'false'), 1);
