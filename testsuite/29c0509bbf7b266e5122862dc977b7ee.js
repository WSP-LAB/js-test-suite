load("201224b0d1c296b45befd2285e95dd42.js");
var code = cacheEntry("(x => x.toSource())`bar`;");
var g = newGlobal({ cloneSingletons: true });
assertEq("[\"bar\"]", evaluate(code, { global: g, saveBytecode: true }));
assertEq("[\"bar\"]", evaluate(code, { global: g, loadBytecode: true }));
