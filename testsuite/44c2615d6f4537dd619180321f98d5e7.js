load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

// Catch memory leaks when enumerating over the global object.

for (let z = 1; z <= 16000; ++z) {
  for each (y in this);
}
