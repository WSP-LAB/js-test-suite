load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
// Class constructors don't have a [[Call]]
class Foo {
    constructor() { }
}

assertThrowsInstanceOf(Foo, TypeError);

class Bar extends Foo {
    constructor() { }
}

assertThrowsInstanceOf(Bar, TypeError);

assertThrowsInstanceOf(class { constructor() { } }, TypeError);
assertThrowsInstanceOf(class extends Foo { constructor() { } }, TypeError);

assertThrowsInstanceOf(class foo { constructor() { } }, TypeError);
assertThrowsInstanceOf(class foo extends Foo { constructor() { } }, TypeError);

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
