load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| test-also-wasm-baseline; exitstatus: 3
// Checking resumption values for 'null' at onEnterFrame.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

if (!wasmIsSupported())
     quit(3);

var g = newGlobal('');
var dbg = new Debugger();
dbg.addDebuggee(g);
sandbox.eval(`
var wasm = wasmTextToBinary('(module (func (nop)) (export "test" 0))');
var m = new WebAssembly.Instance(new WebAssembly.Module(wasm));`);
dbg.onEnterFrame = function (frame) {
    if (frame.type !== "wasmcall") return;
    return null;
};
g.eval("m.exports.test()");
assertEq(false, true);
