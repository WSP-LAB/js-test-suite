load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
class TestClass {
    constructor() { }
    method() { }
    get getter() { }
    set setter(x) { }
    *generator() { }
    static staticMethod() { }
    static get staticGetter() { }
    static set staticSetter(x) { }
    static *staticGenerator() { }
}

var test = new TestClass();

var hasPrototype = [
    test.constructor,
    test.generator,
    TestClass.staticGenerator
]

for (var fun of hasPrototype) {
    assertEq(fun.hasOwnProperty('prototype'), true);
}

var hasNoPrototype = [
    test.method,
    Object.getOwnPropertyDescriptor(test.__proto__, 'getter').get,
    Object.getOwnPropertyDescriptor(test.__proto__, 'setter').set,
    TestClass.staticMethod,
    Object.getOwnPropertyDescriptor(TestClass, 'staticGetter').get,
    Object.getOwnPropertyDescriptor(TestClass, 'staticSetter').set,
]

for (var fun of hasNoPrototype) {
    assertEq(fun.hasOwnProperty('prototype'), false);
}

if (typeof reportCompare === "function")
    reportCompare(0, 0, "OK");
