load("201224b0d1c296b45befd2285e95dd42.js");
var arr = new Uint8ClampedArray(16);
for (var i = 0; i < 16; i++) {
    arr[i] = "Infinity";
}
assertEq(arr[14], 255);
