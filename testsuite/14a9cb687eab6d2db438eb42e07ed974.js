load("201224b0d1c296b45befd2285e95dd42.js");
function f(type) {
    for (var i = 0; i < 3; i++) {}
    assertEq((new String) instanceof type, true);
}
f(String);
