load("201224b0d1c296b45befd2285e95dd42.js");
/* Don't assert. */
for(p in 0.3) { }

Number.prototype.foo = function() {}
var arr = [];

for(p in 1.2) {
    arr.push(p);
}
assertEq(arr[0], "foo");
