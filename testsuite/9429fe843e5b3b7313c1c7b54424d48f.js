load("201224b0d1c296b45befd2285e95dd42.js");
// Reflect side-effects from the trap
var target = {
    foo: 'bar'
};

var handler = { set: (target, name) => target[name] = 'qux' };
for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
    p['foo'] = 'baz';
    assertEq(target['foo'], 'qux');

    // reset for second iteration
    target['foo'] = 'bar';
}
