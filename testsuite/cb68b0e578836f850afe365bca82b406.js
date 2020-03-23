load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: uncaught exception
var prox = new Proxy({}, {getOwnPropertyDescriptor: function() { throw prox; }});
Object.prototype.__lookupGetter__.call(prox, 'q');
