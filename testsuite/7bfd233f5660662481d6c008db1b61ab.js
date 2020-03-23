load("201224b0d1c296b45befd2285e95dd42.js");
load("789647b4b1873ad4adf74568147f8449.js");
load("19089b69c4b129eba432c322114d8fa0.js");

const Module = WebAssembly.Module;
const Instance = WebAssembly.Instance;
const Memory = WebAssembly.Memory;

var asmJS = asmCompile('stdlib', 'ffis', 'buf', USE_ASM + 'var i32 = new stdlib.Int32Array(buf); return {}');

var asmJSBuf = new ArrayBuffer(BUF_MIN);
asmLink(asmJS, this, null, asmJSBuf);

var wasmMem = wasmEvalText('(module (memory 1 1) (export "mem" memory))').exports.mem;
assertAsmLinkFail(asmJS, this, null, wasmMem.buffer);

if (!getBuildConfiguration().x64 && isSimdAvailable() && this["SIMD"]) {
    var simdJS = asmCompile('stdlib', 'ffis', 'buf', USE_ASM + 'var i32 = new stdlib.Int32Array(buf); var i32x4 = stdlib.SIMD.Int32x4; return {}');
    assertAsmLinkFail(simdJS, this, null, asmJSBuf);
    assertAsmLinkFail(simdJS, this, null, wasmMem.buffer);

    var simdJSBuf = new ArrayBuffer(BUF_MIN);
    asmLink(simdJS, this, null, simdJSBuf);
    asmLink(simdJS, this, null, simdJSBuf);  // multiple SIMD.js instantiations succeed
    assertAsmLinkFail(asmJS, this, null, simdJSBuf);  // but not asm.js
}
