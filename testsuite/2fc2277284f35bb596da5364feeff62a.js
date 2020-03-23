load("201224b0d1c296b45befd2285e95dd42.js");
function f() {
    const b = 0;
    switch (1) {
      case b = 0:
    }
}
var err;
try {
    f();
} catch(e) {
    err = e;
}
assertEq(err.name, "TypeError");

function g() {
    const z = 0;
    while (z = 1) {}
}
err = null;
try {
    g();
} catch(e) {
    err = e;
}
assertEq(err.name, "TypeError");
