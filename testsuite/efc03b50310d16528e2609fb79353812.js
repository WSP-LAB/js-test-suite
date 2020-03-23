//@ runFTLNoCJIT

// If all goes well, this test module will terminate silently. If not, it will print
// errors. See binary-op-test.js for debugging options if needed.

load("cbf3f68aeccca927a46db64a369a6b4f.js");

//============================================================================
// Test configuration data:

var opName = "mul";
var op = "*";

load("bab67abb5130d312c132d4ab9d2e9729.js");

tests = [];
generateBinaryTests(tests, opName, op, "VarVar", values, values);

run();
