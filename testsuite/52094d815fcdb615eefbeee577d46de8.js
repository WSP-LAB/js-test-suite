load("201224b0d1c296b45befd2285e95dd42.js");
// Don't assert.
try {
    eval('\
    function asmModule(g, foreign, heap) {\
        "use asm";\
        let HEAP8 = new g.Int8Array(heap);\
        function f() { return 17; } \
        return {f: f};\
    }\
    let m = asmModule("", "", 1, "");\
    ');
} catch (ex) {
}
