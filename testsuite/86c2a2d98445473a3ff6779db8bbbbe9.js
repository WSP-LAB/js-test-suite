load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var g = evalcx("lazy");
assertThrowsInstanceOf(
    () => evaluate("{ let eval; eval()}", {global: g}),
    g.TypeError); // eval is not a function
assertEq(evaluate("{ let eval = parseInt; eval()}", {global: g}), NaN);
