load("201224b0d1c296b45befd2285e95dd42.js");
var magic = 8;

var obj = {};
for (var i = 1; i <= magic; ++i)
    obj[i] = "a";

function func() {
    var i = 1;
    while (i in obj) {
        ++i;
    }
    return i - 1;
}
assertEq(func(), magic);
assertEq(func(), magic);
assertEq(func(), magic);
