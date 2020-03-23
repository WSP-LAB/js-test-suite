load("201224b0d1c296b45befd2285e95dd42.js");
function f1() {
    gc();
}
function f2() {
    with(this) {};
    f1();
}
function f3() {
    f2();
}
function f4() {
    f3();
}
f3();
f3();
f4();
