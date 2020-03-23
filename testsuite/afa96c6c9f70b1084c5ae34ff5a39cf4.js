load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError;
gczeal(4);
function gen() {
  var c = [1, "x"];
  try {
    yield c;
  } finally {
    gc();
  }
}
var iter = gen();
for (i in iter) {
  (SECTION)();
}
