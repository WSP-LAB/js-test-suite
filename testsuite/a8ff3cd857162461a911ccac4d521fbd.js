load("201224b0d1c296b45befd2285e95dd42.js");
// Use arguments in an eval.
code = " \
function f(a) { var x = a; } \
for (var i = 0; i < 10; i++) { f(5); } \
";

eval(code);


// Test it doesn't assert.
