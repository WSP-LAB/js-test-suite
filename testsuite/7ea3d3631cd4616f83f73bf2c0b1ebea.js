load("201224b0d1c296b45befd2285e95dd42.js");
load("19089b69c4b129eba432c322114d8fa0.js");

// Bug 1280933, excerpted from binary test case provided there.

wasmEvalText(
`(module
  (func $func0 (param $arg0 i32) (result i32) (local $var0 i64)
	(set_local $var0 (i64.extend_u/i32 (get_local $arg0)))
	(i32.wrap/i64
	 (i64.add
	  (block i64
	   (loop $label1 $label0
		(drop (block $label2 i64
		       (br_table $label2 (i64.const 0) (get_local $arg0))))
		(set_local $var0 (i64.mul (i64.const 2) (get_local $var0))))
	   (tee_local $var0 (i64.add (i64.const 4) (get_local $var0))))
	  (i64.const 1))))
  (export "" 0))`);
