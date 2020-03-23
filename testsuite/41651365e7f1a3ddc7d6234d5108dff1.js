load("201224b0d1c296b45befd2285e95dd42.js");
var code = cacheEntry("assertEq('bar', String.raw`bar`);");
var g = newGlobal({ cloneSingletons: true });
evaluate(code, { global: g, saveBytecode: true });
evaluate(code, { global: g, loadBytecode: true })
