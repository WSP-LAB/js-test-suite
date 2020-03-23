load("201224b0d1c296b45befd2285e95dd42.js");
x = [0, 1, 1, 0, 1, 1];
y = -1;
sum = 0;
for (var j = 0; j < x.length; ++j) {
    sum = sum + (x[j] ? 0 : (y >>> 0)) | 0;
}
assertEq(sum, -2);
