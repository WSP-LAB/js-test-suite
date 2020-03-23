load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
class base1 {
    constructor() {
        this.base = 1;
    }
}

class base2 {
    constructor() {
        this.base = 2;
    }
}

class inst extends base1 {
    constructor() {
        super();
    }
}

assertEq(new inst().base, 1);

Object.setPrototypeOf(inst, base2);

assertEq(new inst().base, 2);

// Still works with default constructor

class defaultInst extends base1 { }

assertEq(new defaultInst().base, 1);
Object.setPrototypeOf(defaultInst, base2);
assertEq(new defaultInst().base, 2);

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
