load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:Error

// Binary: cache/js-dbg-32-1301a72b1c39-linux
// Flags: --ion-eager
//

load("00e0aa336e6c8b65ee1f164279cff5fc.js");

[1,2,3,4,(':'),6,7,8].forEach(
    function(x) {
        assertEq(evalInFrame(0, ('^')), x);
    }
);
