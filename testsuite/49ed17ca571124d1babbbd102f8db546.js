load("201224b0d1c296b45befd2285e95dd42.js");
load("19089b69c4b129eba432c322114d8fa0.js");

let bodies = [
    `
    i32.const 1
    i32.const 0
    i32.div_s
    `,
    `
    i32.const 1
    i32.const 0
    i32.rem_s
    `,
    `
    f64.const 1797693134862315708145274e284
    i64.trunc_s/f64
    `,
    `
    f32.const 1797693134862315708145274e284
    i32.trunc_s/f32
    `
];

for (let body of bodies) {
    wasmFullPass(`
    (module
        (func $f (param $x i32) (result i32)
            loop $top
                get_local $x
                if
                    get_local $x
                    br 2
                end
                ${body}
                br $top
            end
        )
        (export "run" $f)
    )`, 42, {}, 42);
}
