load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| --unboxed-arrays

let moduleRepo = {};
setModuleResolveHook(function(module, specifier) {
        return moduleRepo[specifier];
});
setJitCompilerOption("ion.warmup.trigger", 50);
s = "";
for (i = 0; i < 1024; i++) s += "export let e" + i + "\n";
moduleRepo['a'] = parseModule(s);
parseModule("import * as ns from 'a'").declarationInstantiation();
