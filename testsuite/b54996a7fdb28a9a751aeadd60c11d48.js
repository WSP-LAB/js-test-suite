load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    var x = arguments;
    arguments.length = {};
    for (var i = 0; i < 9; i++)
        x.length.toSource();
}
f();
