load("201224b0d1c296b45befd2285e95dd42.js");
x = {};
y = x;
x.toString = function() {
    new Int8Array(ArrayBuffer)[0] = new Float32Array(ArrayBuffer)[0];
}
print(x << y);
