load("201224b0d1c296b45befd2285e95dd42.js");
// Iterating over a property with an Array id.
function n() {}
function g() {}
eval("\
  function a() {}\
  function b() {\
    for (w in this) {}\
    Object.defineProperty(\
      this, \
      new Array, \
      ({enumerable: true})\
    )\
  }\
  for (z in [0, 0, 0]) b()\
")

// Test it doesn't assert.

