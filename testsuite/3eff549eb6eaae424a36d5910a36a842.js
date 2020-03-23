load("201224b0d1c296b45befd2285e95dd42.js");
let a = new Map();
for (let i = 0; i < 1000; i++)
  a.set(i, i);

function f() {
  let iter = a.entries();
  while (!iter.next().done) {}
  iter.next();
}

for (let i = 0; i < 10; i++)
  f();
