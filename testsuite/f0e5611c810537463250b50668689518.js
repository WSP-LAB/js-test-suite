load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError

new(function(stdlib, n, heap) {
    "use asm"
    var x = new stdlib.Uint32Array(heap)
    function f() {}
    return f
})
