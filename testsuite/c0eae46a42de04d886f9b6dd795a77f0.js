load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

// Function.prototype.toString doesn't accept ES6 proxies.

var proxy = new Proxy(function() {}, {});
assertThrowsInstanceOf(() => Function.prototype.toString.call(proxy), TypeError);
var o = Proxy.revocable(function() {}, {});
assertThrowsInstanceOf(() => Function.prototype.toString.call(o.proxy), TypeError);
o.revoke();
assertThrowsInstanceOf(() => Function.prototype.toString.call(o.proxy), TypeError);
