load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

var a = [];
for (let j = 0; j < 6; ++j) {
  e = 3; 
  for each (let c in [10, 20, 30]) { 
    a.push(e);
    e = c; 
  }
}
for (let j = 0; j < 6; ++j) {
  assertEq(a[j*3 + 0], 3);
  assertEq(a[j*3 + 1], 10);
  assertEq(a[j*3 + 2], 20);
}
