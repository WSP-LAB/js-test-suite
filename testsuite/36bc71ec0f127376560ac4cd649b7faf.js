load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| allow-oom
var size = 1000000;
var a = [];
for (var i = 0; i < size; ++i) {
    a[i] = null;
}
gcparam("maxBytes", gcparam("gcBytes") + 4*1024);
for (var i = 0; i < size; ++i) {
    a[i] = [];
}
