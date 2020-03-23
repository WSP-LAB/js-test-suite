load("201224b0d1c296b45befd2285e95dd42.js");
let m = parseModule(`
  const root = newGlobal();
  minorgc();
  root.eval();
`);
m.declarationInstantiation();
m.evaluation();
