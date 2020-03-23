load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
for (var constructor of anyTypedArrayConstructors) {
    // Check superficial features of %TypeArray%.from.
    var desc = Object.getOwnPropertyDescriptor(constructor.__proto__, "from");
    assertEq(desc.configurable, true);
    assertEq(desc.enumerable, false);
    assertEq(desc.writable, true);
    assertEq(constructor.from.length, 1);
    assertThrowsInstanceOf(() => new constructor.from(), TypeError);  // not a constructor
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
