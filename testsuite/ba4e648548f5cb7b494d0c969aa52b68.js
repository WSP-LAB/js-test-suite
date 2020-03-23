load("201224b0d1c296b45befd2285e95dd42.js");
load("19089b69c4b129eba432c322114d8fa0.js");

wasmFullPass(`(module
    (memory 1 32768)
    (func $test (result i32)
        (if (i32.eq (grow_memory (i32.const 16384)) (i32.const -1)) (return (i32.const 42)))
        (i32.store (i32.const 1073807356) (i32.const 42))
        (i32.load (i32.const 1073807356)))
    (export "run" $test)
)`, 42);
