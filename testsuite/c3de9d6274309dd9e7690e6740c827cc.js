load("201224b0d1c296b45befd2285e95dd42.js");
a = []
function f(o) {
    o[5] = {}
}
for (var i = 0; i < 20; i++) {
    with(a) f(a)
}
