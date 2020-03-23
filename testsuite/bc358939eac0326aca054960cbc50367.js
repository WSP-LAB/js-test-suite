load("201224b0d1c296b45befd2285e95dd42.js");
load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var target = {};
var handler = {
    getOwnPropertyDescriptor: function () { return { value: 2, configurable: true}; }
};

for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
    Object.getOwnPropertyDescriptor(p, 'foo');

Object.preventExtensions(target);
for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy])
    assertThrowsInstanceOf(() => Object.getOwnPropertyDescriptor(p, 'foo'), TypeError);
