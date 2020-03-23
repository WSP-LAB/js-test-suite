load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| need-for-each

/* Don't assert. */
x = [1,2,3]
function f(aaa) {
    aaa.e = x
}
for each(let c in [x, x, x]) {
    f(c)
}
assertEq(0,0);
