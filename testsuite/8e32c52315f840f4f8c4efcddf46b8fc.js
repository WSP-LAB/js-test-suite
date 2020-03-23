load("201224b0d1c296b45befd2285e95dd42.js");

function g() {
    yield
}
g()
function f() {
    g()
}
try {
    new f
} catch (e) {}
