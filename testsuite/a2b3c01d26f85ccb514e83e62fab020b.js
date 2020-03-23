load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| test-also-wasm-baseline; exitstatus: 3

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

if (!wasmIsSupported())
     quit(3);

var g = newGlobal();
g.parent = this;
g.eval("new Debugger(parent).onExceptionUnwind = function () {  some_error; };");

var module = new WebAssembly.Module(wasmTextToBinary(`
(module
    (import $imp "a" "b" (result i32))
    (func $call (result i32) (call 0))
    (export "call" $call)
)`));

var instance = new WebAssembly.Instance(module, { a: { b: () => {
  some_other_error;
}}});
instance.exports.call();
