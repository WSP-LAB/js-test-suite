load("201224b0d1c296b45befd2285e95dd42.js");
// Indexed getters can add new properties that slice should not ignore.
var arr = [];
Object.defineProperty(arr, 10000, {get: function() {
    arr[10001] = 4;
    return 3;
}});
arr[10010] = 6;

var res = arr.slice(8000);
assertEq(res[2000], 3);
assertEq(res[2001], 4);
assertEq(res[2010], 6);
