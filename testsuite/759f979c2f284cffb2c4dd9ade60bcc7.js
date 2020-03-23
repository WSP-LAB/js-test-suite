load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var offenders = [
    "f(1 ... n)",
    "f(...x for (x in y))",
    "f(...)",
    "f(...,)",
    "f(... ...[])",
    "f(x, ...)",
    "f(...x, x for (x in y))",
    "f(x for (x in y), ...x)"
];
for (var sample of offenders) {
    assertThrowsInstanceOf(function() { eval(sample); }, SyntaxError);
}
