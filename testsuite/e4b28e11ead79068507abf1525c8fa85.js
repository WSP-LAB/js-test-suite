load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");
// Revoked proxies should throw before calling the handler

var called = false;
var target = function () { };
var handler = { construct: () => called = true };
var holder = Proxy.revocable(target, handler);

holder.revoke();

assertThrowsInstanceOf(() => new holder.proxy(), TypeError);
assertEq(called, false);
