load("201224b0d1c296b45befd2285e95dd42.js");
// The proxy is going to mutate thisv in place. InvokeSessionGuard should be
// cool with that
with(evalcx(''))[7, 8].map((n) => new Int16Array(n), [])
