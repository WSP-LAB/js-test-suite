load("201224b0d1c296b45befd2285e95dd42.js");
if (!('oomTest' in this))
    quit();
function g(f, params) {
    entryPoints(params);
}
function entry1() {};
s = "g(entry1, {function: entry1});";
f(s);
f(s);
function f(x) {
    oomTest(() => eval(x));
}
