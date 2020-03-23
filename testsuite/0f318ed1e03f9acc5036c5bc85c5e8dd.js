load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| slow; allow-oom

if (typeof oomTest !== 'function' || !wasmIsSupported()) {
    print('Missing oomTest or wasm support in wasm/regress/oom-eval');
    quit();
}

function foo() {
  var g = newGlobal();
  g.eval(`o = new WebAssembly.Instance(new WebAssemby.Module(wasmTextToBinary('(module (func) (export "" 0))')));`);
}
oomTest(foo);
