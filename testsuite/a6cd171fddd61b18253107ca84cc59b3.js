load("201224b0d1c296b45befd2285e95dd42.js");
var arr = new Uint8ClampedArray(10*1024*1024);
var sum = 0;
for (var i = 0; i < 10000; i++)
    sum += arr[i];
