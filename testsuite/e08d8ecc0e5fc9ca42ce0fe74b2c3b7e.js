load("201224b0d1c296b45befd2285e95dd42.js");
// Test flat string replacement, per ECMAScriptv5 15.5.4.11.
assertEq("1+2".replace("1+2", "$&+3"), "1+2+3");
assertEq(")".replace(")","*$&*"), "*)*");
