load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var offenders = [
    "(1 ... n)",
    "[1 ... n]",
    "(...x)",
    "[...x for (x of y)]",
    "[...x, x for (x of y)]",
    "[...]",
    "(...)",
    "[...,]",
    "[... ...[]]",
    "(... ...[])",
    "[x, ...]",
    "(x, ...)"
];
for (var sample of offenders) {
    assertThrowsInstanceOf(function () { eval(sample); }, SyntaxError);
}
