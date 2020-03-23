load("201224b0d1c296b45befd2285e95dd42.js");
load("19089b69c4b129eba432c322114d8fa0.js");

var code = `(module
  (import $i "env" "test")
  (func $t (call $i))
  (export "test" $t)
)`;
var mod = wasmEvalText(code, {
  env: {
    test: function() {
       // Expecting 3 lines in the backtrace (plus last empty).
       // The middle one is for the wasm function.
       var s = getBacktrace();
       assertEq(s.split('\n').length, 4);
       assertEq(s.split('\n')[1].startsWith("1 wasm-function[1]("), true);

       // Let's also run DumpBacktrace() to check if we are not crashing.
       backtrace();
    }
  }
}).exports;
mod.test();
