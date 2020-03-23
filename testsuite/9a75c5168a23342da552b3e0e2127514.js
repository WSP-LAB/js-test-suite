load("201224b0d1c296b45befd2285e95dd42.js");
// Bug 1319415

load("19089b69c4b129eba432c322114d8fa0.js");

var src =
`(module
  (func (result i32)
    i32.const 0
    i32.const 1
    br_if 0
    unreachable)
  (export "run" 0))`;

wasmFullPass(src, 0);
