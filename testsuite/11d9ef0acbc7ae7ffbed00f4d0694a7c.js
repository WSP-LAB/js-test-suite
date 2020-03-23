load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();

function f() {
    return this === null;
};

function g() {
    if (!f.apply(9)) {}
}

oomTest(g);
