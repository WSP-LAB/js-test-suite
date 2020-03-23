load("201224b0d1c296b45befd2285e95dd42.js");
load("19089b69c4b129eba432c322114d8fa0.js");

// Bug 1280926, extracted from binary

wasmEvalText(
`(module
  (type $type0 (func (result i32)))
  (export "" $func0)
  (func $func0 (result i32)
   (i32.shr_s (i32.const -40) (i32.const 34))))`);
