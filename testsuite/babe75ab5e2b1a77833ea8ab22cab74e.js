load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
gczeal(4);
var g_rx = /(?:)/;
(3).replace(g_rx.compile("test", "g"), {});

