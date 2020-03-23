load("201224b0d1c296b45befd2285e95dd42.js");
// Iterator prototype surfaces.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

var iterProto = null;

function test(constructor) {
    var iter = new constructor()[Symbol.iterator]();
    assertDeepEq(Reflect.ownKeys(iter), []);

    // Iterator prototypes only have a .next and @@toStringTag property.
    var proto1 = Object.getPrototypeOf(iter);
    assertDeepEq(Reflect.ownKeys(proto1), ['next', Symbol.toStringTag]);

    var desc = Object.getOwnPropertyDescriptor(proto1, 'next');
    assertEq(desc.configurable, true);
    assertEq(desc.enumerable, false);
    assertEq(desc.writable, true);

    // %IteratorPrototype%
    var proto2 = Object.getPrototypeOf(proto1);
    assertEq(Object.getPrototypeOf(proto2), Object.prototype);
    assertEq(Object.prototype.toString.call(proto2), "[object Object]");

    assertDeepEq(Reflect.ownKeys(proto2), [Symbol.iterator]);
    assertEq(proto2[Symbol.iterator](), proto2);

    // Check there's a single %IteratorPrototype% object.
    if (iterProto === null)
	iterProto = proto2;
    else
	assertEq(iterProto, proto2);
}

test(Array);
test(String);
test(Map);
test(Set);
