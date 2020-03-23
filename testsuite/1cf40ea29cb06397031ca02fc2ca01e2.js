load("201224b0d1c296b45befd2285e95dd42.js");
// Basic for-of test with Proxy.

var s = '';
var arr = ['a', 'b', 'c', 'd'];
var p = new Proxy(arr, {});

// Test the same proxy twice.
for (var i = 0; i < 2; i++) {
    var j = 0;
    for (var x of p)
        assertEq(x, arr[j++]);
    assertEq(j, arr.length);
}
