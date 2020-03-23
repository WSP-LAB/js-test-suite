load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: InternalError
var op = Object.prototype;
op.b = op;
op.__iterator__ = Iterator;
for (var c in {}) {}

