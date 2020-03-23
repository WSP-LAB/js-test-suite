load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

for each(let x in [0, {}, 0, {}]) {
  x.valueOf
}

// don't crash
