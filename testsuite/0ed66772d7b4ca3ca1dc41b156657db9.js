load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError

let m = parseModule(`
var i = 0;
addThis();
function addThis() {
  return statusmessages[i] = Number;
}
`);
m.declarationInstantiation();
m.evaluation();
