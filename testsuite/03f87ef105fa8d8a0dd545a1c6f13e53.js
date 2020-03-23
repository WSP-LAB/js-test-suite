load("201224b0d1c296b45befd2285e95dd42.js");
// |jit-test| error: TypeError
load("6ec98b17981f95f4363b8bc9869495e2.js");

Object.defineProperty(Object.prototype, "name",
                      { set(v) { throw new TypeError("hit name"); },
                        enumerable: true,
                        configurable: true });

function TestCase(n) {
    this.name = n;
}
new TestCase();
