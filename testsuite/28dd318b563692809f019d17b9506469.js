load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError

new Function(`
  while (true) {
    try {
        var buf = new Uint8ClampedArray(a);
    } catch (e) {
        break;
    }
  }
  var caughtInvalidArguments = false;
  while (true) {
    var a = inIon() ? -true.get : 0;
    while (x > 7 & 0) {}
  }
`)();

