load("201224b0d1c296b45befd2285e95dd42.js");
// The SavedFrame constructor shouldn't have been exposed to JS on the global.

saveStack();
assertEq(typeof SavedFrame, "undefined");
