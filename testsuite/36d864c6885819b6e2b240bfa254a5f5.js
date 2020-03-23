load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: ReferenceError

// Test the TDZ works for glbao lexicals through Debugger environments in
// compound assignments.
load("00e0aa336e6c8b65ee1f164279cff5fc.js");

evalInFrame(0, "x |= 0");
let x;
