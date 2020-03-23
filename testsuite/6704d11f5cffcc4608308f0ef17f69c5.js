load("201224b0d1c296b45befd2285e95dd42.js");
function g1() {}
function g2() {
    return function Int8Array () {};
}
function f1(other) {
    eval("gc(); h = g1");
    for(var i=0; i<20; i++) {
        i = i.name;
    }
}
f1(g2);
