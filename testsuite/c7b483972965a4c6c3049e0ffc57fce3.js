load("201224b0d1c296b45befd2285e95dd42.js");
load("19089b69c4b129eba432c322114d8fa0.js");

const Module = WebAssembly.Module;
const Instance = WebAssembly.Instance;
const Table = WebAssembly.Table;

var i42 = new Instance(new Module(wasmTextToBinary(`(module (func (result i32) (i32.const 42)) (export "f" 0))`)));
var i13 = new Instance(new Module(wasmTextToBinary(`(module (func (result i32) (i32.const 13)) (export "f" 0))`)));
var t = new Table({element:"anyfunc", initial:1});
t.set(0, i42.exports.f);

assertEq(t.get(0)(), 42);

verifyprebarriers();
t.set(0, i13.exports.f);
verifyprebarriers();

assertEq(t.get(0)(), 13);

verifyprebarriers();
t.set(0, null);
verifyprebarriers();

assertEq(t.get(0), null);
