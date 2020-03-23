load("201224b0d1c296b45befd2285e95dd42.js");
// Test that static eval scopes don't mess with statement nested scope logic in
// the frontend.
eval("if (true) { { let y; } } else {}")
