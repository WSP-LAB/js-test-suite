load("201224b0d1c296b45befd2285e95dd42.js");
load("19089b69c4b129eba432c322114d8fa0.js");

var module = new WebAssembly.Module(wasmTextToBinary(`(module (func (nop)))`));
var exp = wasmExtractCode(module);
assertEq(exp.code instanceof Uint8Array, true);
assertEq(Array.isArray(exp.segments), true);
var funcs = exp.segments.filter(s => s.kind === 0);
assertEq(funcs.length, 1);
assertEq(funcs[0].funcIndex, 0);
assertEq(funcs[0].begin >= 0, true);
assertEq(funcs[0].begin <= funcs[0].funcBodyBegin, true);
assertEq(funcs[0].funcBodyBegin < funcs[0].funcBodyEnd, true);
assertEq(funcs[0].funcBodyEnd <= funcs[0].end, true);
assertEq(funcs[0].end <= exp.code.length, true);
