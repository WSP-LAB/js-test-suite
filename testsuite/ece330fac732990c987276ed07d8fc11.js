load("201224b0d1c296b45befd2285e95dd42.js");
function f(x) {
    // Enter via OSR.
    for (var j = 0; j < 100; j++) { };

    for (var i = 0; i < arguments.length; i++)
        assertEq(arguments[i], i);
};
f(0, 1, 2, 3);
