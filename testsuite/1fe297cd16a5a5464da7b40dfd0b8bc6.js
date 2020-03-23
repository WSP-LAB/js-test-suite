load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError

let moduleRepo = {};
setModuleResolveHook(function(module, specifier) {
        return moduleRepo[specifier];
});
let a = moduleRepo['a'] = parseModule("var x = 1; export { x };");
let b = moduleRepo['b'] = parseModule("import { x as y } from 'a';");
a.__proto__ = {15: 1337};
b.declarationInstantiation();
