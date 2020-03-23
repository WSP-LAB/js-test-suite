load("201224b0d1c296b45befd2285e95dd42.js");
load("19089b69c4b129eba432c322114d8fa0.js");

// Bug 1280934, equivalent test case.

try {

wasmEvalText(
`(module
  (func $func0 (result i32) ${locals()}
   (i32.const 0))
  (export "" 0))`);

} catch (e) {
    // The wasm baseline compiler throws OOM on too-large frames, so
    // handle that.
    if (!String(e).match(/out of memory/))
        throw e;
}

// The wasm baseline compiler cuts off frames at 256KB at the moment;
// the test case for bug 1280934 constructed a frame around 512KB so
// duplicate that here.

function locals() {
    var s = "";
    for ( var i=0 ; i < 50000 ; i++ )
        s += "(local f64)\n";
    return s;
}
