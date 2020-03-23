load("201224b0d1c296b45befd2285e95dd42.js");
function f(m, x) {
        for (var i = 0; i < 2; ++i) {
                    print(m(x[0]));
                        }
}
function g() {
        return false;
}
function h(y) {
        return (y === 0);
}
f(g, [objectEmulatingUndefined()]);
f(h, [false]);
