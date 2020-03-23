load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

for each(let w in [[], 0, [], 0]) {
  w.unwatch()
}
