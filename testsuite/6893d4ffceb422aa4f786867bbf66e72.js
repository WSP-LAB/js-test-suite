load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
var r = Proxy.revocable({}, {});
var p = r.proxy;
r.revoke();
p instanceof Object;
