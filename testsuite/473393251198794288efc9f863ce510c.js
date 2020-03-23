load("201224b0d1c296b45befd2285e95dd42.js");
setARMHwCapFlags('vfp');

if (typeof WebAssembly !== "undefined") {
    var i = new WebAssembly.Instance(
                new WebAssembly.Module(
                    wasmTextToBinary('(module (func (export "") (result i32) (i32.const 42)))')));
    assertEq(i.exports[""](), 42);
}
