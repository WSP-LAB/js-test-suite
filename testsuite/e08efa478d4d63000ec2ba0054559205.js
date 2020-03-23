load("201224b0d1c296b45befd2285e95dd42.js");
// Forward to the target if the trap is not defined
var target = {};
var proxy = new Proxy(target, {});
Object.preventExtensions(proxy);
assertEq(Object.isExtensible(target), false);

target = {};
proxy = Proxy.revocable(target, {}).proxy;
Object.preventExtensions(proxy);
assertEq(Object.isExtensible(target), false);
