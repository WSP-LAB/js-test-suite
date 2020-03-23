load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

function foo() {
  function testGeneratorDeepBail() {
    gc();
    for (let i = 0; Error(); i++) {
      for each(var x in [{n: 1}, {n: 1}]) {
        x[0] = 0;
        Object.freeze(x);
      }
      if (i == 10)
        break;
    }
  }
  testGeneratorDeepBail();
} foo();
