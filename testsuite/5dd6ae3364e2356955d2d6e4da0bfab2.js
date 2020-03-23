load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

z = [];
m = evalcx("");
Object.freeze(m);
for each(l in [{}, {}]) {
  m.s = "";
}
