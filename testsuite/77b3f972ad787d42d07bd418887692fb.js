load("201224b0d1c296b45befd2285e95dd42.js");

a = new Array;
for (var i = 0; i != 1000; ++i) a[i] = 17;
var x = '123' + '\0' + '456';
(1, a[x], ': 123\\0456');
