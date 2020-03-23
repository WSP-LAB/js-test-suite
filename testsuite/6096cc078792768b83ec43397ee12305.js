load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: InternalError

for (e in (function x() { [eval()].some(x) } ()));

/* Don't crash or assert. */

