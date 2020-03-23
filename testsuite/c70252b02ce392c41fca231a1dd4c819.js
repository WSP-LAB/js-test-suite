load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
class testBasic {
    constructor() { }
    static constructor() { }
}

class testWithExtends extends null {
    constructor() { };
    static constructor() { };
}

class testOrder {
    static constructor() { };
    constructor() { };
}

class testOrderWithExtends extends null {
    static constructor() { };
    constructor() { };
}

if (typeof reportCompare === "function")
    reportCompare(0,0,"OK");
