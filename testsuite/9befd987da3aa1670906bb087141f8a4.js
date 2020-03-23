load("201224b0d1c296b45befd2285e95dd42.js");
function g() {
    z = newGlobal('');
    return function(code) {
        evalcx(code, z)
    }
}
f = g();
f("\
    options('strict_mode');\
    for (var x = 0; x < 1; ++x) {\
        a = x;\
    }\
    options('strict_mode');\
");
f("a in eval");

