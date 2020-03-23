load("201224b0d1c296b45befd2285e95dd42.js");
// Map can take an argument that is an array of singleton arrays.

var arr = [["a"], ["b"], ["c"]];
var m = new Map(arr);
assertEq(m.size, 3);
for (var [k, _] of arr) {
    assertEq(m.has(k), true);
    assertEq(m.get(k), undefined);
}
