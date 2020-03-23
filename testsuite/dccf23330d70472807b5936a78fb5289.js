load("201224b0d1c296b45befd2285e95dd42.js");
/* Don't assert. */
o1 = {};
o1 = 2;
function f(o) {
    o.hasOwnProperty("x");
}
new f(o1);
f(o1);
