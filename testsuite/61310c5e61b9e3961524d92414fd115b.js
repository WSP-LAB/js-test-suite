load("201224b0d1c296b45befd2285e95dd42.js");
x = []
for(var i=0; i<3; i++) {
    var obj = { first: "first", second: "second" };
    var count = 0;
    for (var elem in obj) {
        delete obj.second;
        count++;
    }
    x.push(count);
}
assertEq(x[0], 1);
assertEq(x[1], 1);
assertEq(x[2], 1);
