load("201224b0d1c296b45befd2285e95dd42.js");
// Forward to the target if the trap is not defined
var target = {};
Object.defineProperty(target, 'foo', {
    value: 'bar',
    writable: true,
    enumerable: false,
    configurable: true
});

for (let p of [new Proxy(target, {}), Proxy.revocable(target, {}).proxy]) {
    var desc = Object.getOwnPropertyDescriptor(p, 'foo');
    assertEq(desc.value, 'bar');
    assertEq(desc.writable, true);
    assertEq(desc.enumerable, false);
    assertEq(desc.configurable, true);
}

var proto = {};
Object.defineProperty(proto, 'foo', {
    value: 'bar',
    writable: true,
    enumerable: false,
    configurable: true
});
var target = Object.create(proto);
for (let p of [new Proxy(target, {}), Proxy.revocable(target, {}).proxy])
    assertEq(Object.getOwnPropertyDescriptor(p, 'foo'), undefined);
