load("201224b0d1c296b45befd2285e95dd42.js");
// Destructuring does not occur when the target of for-of is an empty typed array.

for (var [[x]] of new Int32Array(0))
    throw "FAIL";
