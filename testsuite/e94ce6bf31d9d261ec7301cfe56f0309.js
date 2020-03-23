load("201224b0d1c296b45befd2285e95dd42.js");
load("19089b69c4b129eba432c322114d8fa0.js");

new WebAssembly.Module(wasmTextToBinary(`(module
    (memory 1)
    (func
        (i64.trunc_s/f32 (f32.const 6.96875))
        (i32.load8_s (i32.const 0))
        (f32.const -7.66028056e-31)
        (unreachable)
    )
)`));
