load("201224b0d1c296b45befd2285e95dd42.js");
// Generator methods work transparently on CrossCompartmentWrappers.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

function gen() { yield 1; yield 2; }
var it = gen();

var g = newGlobal();
g.eval("function gen2() { yield 3; yield 4; }; var it2 = gen2();");

// LegacyGenerator.next
assertEq(it.next.call(g.it2), 3);

// LegacyGenerator.throw
assertThrowsValue(() => it.throw.call(g.it2, 7), 7);

function *gen3() { yield 1; yield 2; }
it = gen3();
g.eval("function *gen4() { yield 5; yield 6; }; var it4 = gen4();");

// StarGenerator.next
assertIteratorResult(it.next.call(g.it4), 5, false)

// StarGenerator.throw
assertThrowsValue(() => it.throw.call(g.it4, 8), 8);

// StarGenerator.return
assertIteratorResult(it.return.call(g.it4, 8), 8, true);

// Other objects should throw.
try {
    it.next.call([]);
    assertEq(0, 1);
} catch (e) {
    assertEq(e.toString().includes("called on incompatible Array"), true);
}
