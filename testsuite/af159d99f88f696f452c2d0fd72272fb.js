load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
function base() { }

class beforeSwizzle extends base {
    constructor() {
        super(Object.setPrototypeOf(beforeSwizzle, null));
    }
}

new beforeSwizzle();

// Again, testing both dynamic prototype dispatch, and that we get the function
// before evaluating args
class beforeThrow extends base {
    constructor() {
        function thrower() { throw new Error(); }
        super(thrower());
    }
}

Object.setPrototypeOf(beforeThrow, Math.sin);

// Will throw that Math.sin is not a constructor before evaluating the args
assertThrowsInstanceOf(() => new beforeThrow(), TypeError);

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
