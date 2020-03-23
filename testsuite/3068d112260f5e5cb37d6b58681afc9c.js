load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError

let a;
for(let {a = new class extends Array { constructor(){super[a]} }} of [[]]) {
}
