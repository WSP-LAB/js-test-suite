load("201224b0d1c296b45befd2285e95dd42.js");
load("dc4b20628140c803c89c741458a4c2d0.js");

function check(f) {
  assertEqArray(f.call(...[null], 1, 2, 3), [1, 2, 3]);
  assertEqArray(f.call(...[null], 1, ...[2, 3], 4, ...[5, 6]), [1, 2, 3, 4, 5, 6]);
  assertEqArray(f.call(...[null, 1], ...[2, 3], 4, ...[5, 6]), [1, 2, 3, 4, 5, 6]);
  assertEqArray(f.call(...[null, 1, ...[2, 3], 4, ...[5, 6]]), [1, 2, 3, 4, 5, 6]);
}

check(function(...x) { return x; });
check((...x) => x);
