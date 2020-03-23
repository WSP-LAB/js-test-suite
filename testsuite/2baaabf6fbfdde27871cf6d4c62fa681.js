load("201224b0d1c296b45befd2285e95dd42.js");
load("19089b69c4b129eba432c322114d8fa0.js");

const Module = WebAssembly.Module;

// Create cross-compartment wrappers to typed arrays and array buffers.
var g = newGlobal();
var code1 = g.eval("wasmTextToBinary('(module)')");
var code2 = g.eval("wasmTextToBinary('(module)').buffer");

// Should get unwrapped.
assertEq(new Module(code1) instanceof Module, true);
assertEq(new Module(code2) instanceof Module, true);
