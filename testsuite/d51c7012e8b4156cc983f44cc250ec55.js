load("201224b0d1c296b45befd2285e95dd42.js");
load("19089b69c4b129eba432c322114d8fa0.js");

assertEq(wasmEvalText(`
(module
  (func $f (param $p i32)
    block $out
      i32.const 0
      if
        i32.const 1
        tee_local $p
        br_table $out $out
      end
    end
    get_local $p
    br_if 0
  )
  (export "f" $f)
)
`).exports.f(42), undefined);
