load("201224b0d1c296b45befd2285e95dd42.js");
function f(arr) {
    var x;
    for (var i=0; i<100; i++) {
        x = arr.pop();
    }
    return x;
}

var arr = [];
for (var i=0; i<130; i++) {
    arr.push({i: i});
}

assertEq(f(arr).i, 30);
assertEq(arr.length, 30);
assertEq(f(arr), undefined);
assertEq(arr.length, 0);
