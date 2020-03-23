load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var r = Proxy.revocable({}, {});
var r2 = Proxy.revocable(function(){}, {});
r.revoke();
r2.revoke();

var p = r.proxy;
var p2 = r2.proxy;

assertThrowsInstanceOf(() => ({} instanceof p), TypeError);
assertThrowsInstanceOf(() => ({} instanceof p2), TypeError);

assertThrowsInstanceOf(() => Object.prototype.toString.call(p), TypeError);
assertThrowsInstanceOf(() => Object.prototype.toString.call(p2), TypeError);

assertThrowsInstanceOf(() => RegExp.prototype.exec.call(p, ""), TypeError);
assertThrowsInstanceOf(() => RegExp.prototype.exec.call(p2, ""), TypeError);
