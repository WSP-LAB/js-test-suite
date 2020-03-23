load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
// The prototype of a class is a non-writable, non-configurable, non-enumerable data property.
class a { constructor() { } }
let b = class { constructor() { } };
for (let test of [a,b]) {
    var protoDesc = Object.getOwnPropertyDescriptor(test, "prototype");
    assertEq(protoDesc.writable, false);
    assertEq(protoDesc.configurable, false);
    assertEq(protoDesc.enumerable, false);

    var prototype = protoDesc.value;
    assertEq(typeof prototype, "object");
    assertEq(Object.getPrototypeOf(prototype), Object.prototype);
    assertEq(Object.isExtensible(prototype), true);

    var desiredPrototype = {};
    Object.defineProperty(desiredPrototype, "constructor", { writable: true,
                                                            configurable: true,
                                                            enumerable: false,
                                                            value: test });
    assertDeepEq(prototype, desiredPrototype);
}

// As such, it should by a TypeError to try and overwrite "prototype" with a
// static member. The only way to try is with a computed property name; the rest
// are early errors.
assertThrowsInstanceOf(() => eval(`
                                  class a {
                                    constructor() { };
                                    static ["prototype"]() { }
                                  }
                                  `), TypeError);
assertThrowsInstanceOf(() => eval(`
                                  class a {
                                    constructor() { };
                                    static get ["prototype"]() { }
                                  }
                                  `), TypeError);
assertThrowsInstanceOf(() => eval(`
                                  class a {
                                    constructor() { };
                                    static set ["prototype"](x) { }
                                  }
                                  `), TypeError);

assertThrowsInstanceOf(() => eval(`(
                                  class a {
                                    constructor() { };
                                    static ["prototype"]() { }
                                  }
                                  )`), TypeError);
assertThrowsInstanceOf(() => eval(`(
                                  class a {
                                    constructor() { };
                                    static get ["prototype"]() { }
                                  }
                                  )`), TypeError);
assertThrowsInstanceOf(() => eval(`(
                                  class a {
                                    constructor() { };
                                    static set ["prototype"](x) { }
                                  }
                                  )`), TypeError);

if (typeof reportCompare === "function")
    reportCompare(0, 0, "OK");
