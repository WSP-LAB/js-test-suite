load("e2371540d876710daf38e749390aa2a3.js");
//@ skip

var array = new Array(10000);

for (var i = 0; i < 1000000; ++i)
    array[i % array.length] = new Int32Array(1000);

for (var i = 0; i < array.length; ++i) {
    if (array[i].length != 1000)
        throw "Error: bad array length: " + array[i].length;
}

load("cf1a0efae1078faee510f7bda78d4902.js");
