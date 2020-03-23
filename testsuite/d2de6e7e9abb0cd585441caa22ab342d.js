load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");
var ieval = eval;
var offenders = [["..."], ["...rest"," x"], ["...rest", "[x]"],
                 ["...rest", "...rest2"]];
for (var arglist of offenders) {
    assertThrowsInstanceOf(function () {
        ieval("function x(" + arglist.join(", ") + ") {}");
    }, SyntaxError);
    assertThrowsInstanceOf(function () {
        Function.apply(null, arglist.concat("return 0;"));
    }, SyntaxError);
}