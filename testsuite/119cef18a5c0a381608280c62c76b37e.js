load("201224b0d1c296b45befd2285e95dd42.js");
// Return the trap result
// Man, wouldn't haskell's "uninfix" be cleaner? (+)
function justAdd(x, y) {
    return x + y;
}

var handler = { apply : function (target, receiver, args) { return args[0] * args[1]; } };

for (let p of [new Proxy(justAdd, handler), Proxy.revocable(justAdd, handler).proxy])
    assertEq(p(2,3), 6);
