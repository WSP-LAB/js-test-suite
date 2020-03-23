load("201224b0d1c296b45befd2285e95dd42.js");
// Iterating over a set of objects yields those exact objects.

var arr = [{}, {}, {}, [], /xyz/, new Date];
var set = new Set(arr);
assertEq(set.size, arr.length);

var i = 0;
for (var x of set)
    assertEq(x, arr[i++]);
assertEq(i, arr.length);

