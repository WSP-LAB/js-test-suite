load("201224b0d1c296b45befd2285e95dd42.js");
var arr = [1];
Object.defineProperty(arr, 1, { value: undefined, configurable: false });

// no particular reason for 9 -- just enough to trigger property-cache code,
// maybe start JITting a little
for (var y = 0; y < 9; y++)
  arr.length = 1;
