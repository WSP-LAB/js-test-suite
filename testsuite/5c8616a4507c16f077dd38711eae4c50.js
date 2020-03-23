load("201224b0d1c296b45befd2285e95dd42.js");
load("19089b69c4b129eba432c322114d8fa0.js");

// sanity check
assertErrorMessage(() => wasmEvalText(''), SyntaxError, /parsing wasm text/);

// single line comment
var o = wasmEvalText('(module (func)) ;; end');
var o = wasmEvalText('(module (func)) ;; end\n');
var o = wasmEvalText('(module (func))\n;; end');
var o = wasmEvalText('(module (func))\n;; end');
var o = wasmEvalText(';;start\n(module (func))');
var o = wasmEvalText('(module (func ;; middle\n))');
var o = wasmEvalText('(module (func) ;; middle\n (export "a" 0))').exports;
assertEq(Object.getOwnPropertyNames(o)[0], "a");

// multi-line comments
var o = wasmEvalText('(module (func))(; end ;)');
var o = wasmEvalText('(module (func)) (; end\nmulti;)\n');
var o = wasmEvalText('(module (func))\n(;;)');
var o = wasmEvalText('(;start;)(module (func))');
var o = wasmEvalText('(;start;)\n(module (func))');
var o = wasmEvalText('(module (func (; middle\n multi\n;)))');
var o = wasmEvalText('(module (func)(;middle;)(export "a" 0))').exports;
assertEq(Object.getOwnPropertyNames(o)[0], "a");

// nested comments
var o = wasmEvalText('(module (;nested(;comment;);)(func (;;;;)))');
var o = wasmEvalText(';;;;;;;;;;\n(module ;;(;n \n(func (;\n;;;)))');

assertErrorMessage(() => wasmEvalText(';; only comment'), SyntaxError, /parsing wasm text/);
assertErrorMessage(() => wasmEvalText(';; only comment\n'), SyntaxError, /parsing wasm text/);
assertErrorMessage(() => wasmEvalText('(; only comment ;)'), SyntaxError, /parsing wasm text/);
assertErrorMessage(() => wasmEvalText(';; only comment\n'), SyntaxError, /parsing wasm text/);
