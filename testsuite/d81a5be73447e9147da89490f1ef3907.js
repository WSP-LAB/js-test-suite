load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
x = 0
'a'.replace(/a/, x.toLocaleString)

