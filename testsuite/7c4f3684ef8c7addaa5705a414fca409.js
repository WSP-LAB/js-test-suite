load("201224b0d1c296b45befd2285e95dd42.js");

Array.prototype[1] = 'y';
var a = [0, (8)];
for (var i in a) {
    delete a[1];
}
