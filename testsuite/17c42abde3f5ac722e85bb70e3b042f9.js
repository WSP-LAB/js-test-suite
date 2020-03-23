load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test|
({eval} = Object.defineProperty(evalcx("lazy"), "", {}))
eval("eval(/x/)", [])

/* Don't assert or crash. */

