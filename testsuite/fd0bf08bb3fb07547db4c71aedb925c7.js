load("201224b0d1c296b45befd2285e95dd42.js");
// Forward to the target if the trap is not defined
var proto = Object.create(null, {
    'foo': {
        configurable: true
    }
});
var target = Object.create(proto, {
    'bar': {
        configurable: true
    }
});

for (let p of [new Proxy(target, {}), Proxy.revocable(target, {}).proxy]) {
    assertEq('foo' in p, true);
    assertEq('bar' in p, true);
    assertEq('baz' in p, false);
    assertEq(Symbol() in p, false);
}
