load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError

// Binary: cache/js-dbg-64-88a6e0534e03-linux
// Flags: -j
//
for (a in [/x/, null, new String - Infinity]) {
  print(new evalcx(" "))
}
