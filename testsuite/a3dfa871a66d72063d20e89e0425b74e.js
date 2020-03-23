load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError

var global = newGlobal({ cloneSingletons: true });

var code = cacheEntry(`
function f() {}
Object.freeze(this);
`);

evaluate(code, { global, saveBytecode: true });
evaluate(code, { global, saveBytecode: true });
