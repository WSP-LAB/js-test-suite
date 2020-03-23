load("201224b0d1c296b45befd2285e95dd42.js");
function assertThrowsInstanceOf() {}
gczeal(15)
try {
    gczeal(10, 2)
} catch (Atomics) {}
for (define of[__defineSetter__]) {
    let nonCallable = [{}]
    for (let value of nonCallable) assertThrowsInstanceOf(TypeError)
    key = {
        [Symbol]() {}
    }
}
