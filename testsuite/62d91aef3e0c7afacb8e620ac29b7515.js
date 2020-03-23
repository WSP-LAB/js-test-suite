load("201224b0d1c296b45befd2285e95dd42.js");
/* Don't assert. */
function f() {
    NaN++;
    --NaN;
    Infinity--;
    ++Infinity;
    undefined++;
    --undefined;
    ++Math;
    Math--;
}
f();