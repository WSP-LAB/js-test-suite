load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error:TypeError

// Binary: cache/js-dbg-64-4e9567eeb09e-linux
// Flags: --ion-eager
//
"".replace(RegExp(), Array.reduce)
