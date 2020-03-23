load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
for (var constructor of anyTypedArrayConstructors) {
    assertThrowsInstanceOf(() => constructor(), TypeError);
    assertThrowsInstanceOf(() => constructor(1), TypeError);
    assertThrowsInstanceOf(() => constructor.call(null), TypeError);
    assertThrowsInstanceOf(() => constructor.apply(null, []), TypeError);
    assertThrowsInstanceOf(() => Reflect.apply(constructor, null, []), TypeError);
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
