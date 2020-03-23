load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("9f65b4024a3bba5864aa373908b00833.js");
// Scoping in the head of for(let;;) statements.

let x = 0;
for (let i = 0, a = () => i; i < 4; i++) {
  assertEq(i, x++);
  assertEq(a(), 0);
}
assertEq(x, 4);

x = 11;
let q = 0;
for (let {[++q]: r} = [0, 11, 22], s = () => r; r < 13; r++) {
  assertEq(r, x++);
  assertEq(s(), 11);
}
assertEq(x, 13);
assertEq(q, 1);

reportCompare(0, 0);
