load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
class base { constructor() { } }

// lies and the lying liars who tell them
function lies() { }
lies.prototype = 4;

assertThrowsInstanceOf(()=>Reflect.consruct(base, [], lies), TypeError);

// lie a slightly different way
function get(target, property, receiver) {
    if (property === "prototype")
        return 42;
    return Reflect.get(target, property, receiver);
}

class inst extends base {
    constructor() { super(); }
}
assertThrowsInstanceOf(()=>new new Proxy(inst, {get})(), TypeError);

class defaultInst extends base {}
assertThrowsInstanceOf(()=>new new Proxy(defaultInst, {get})(), TypeError);

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
