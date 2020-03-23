load("201224b0d1c296b45befd2285e95dd42.js");
load("19089b69c4b129eba432c322114d8fa0.js");

var exp = wasmEvalText(`(module
    (memory 1)
    (export "mem" memory)
    (func $f (result i32) (i32.load (i32.const 0)))
    (export "f" $f)
)`).exports;

var ab = exp.mem.buffer;
new Int32Array(ab)[0] = 42;

assertEq(exp.f(), 42);

assertThrowsInstanceOf(() => detachArrayBuffer(ab), Error);
assertEq(exp.f(), 42);

assertThrowsInstanceOf(() => serialize(ab, [ab]), Error);
assertEq(exp.f(), 42);
