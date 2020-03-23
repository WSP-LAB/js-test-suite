load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
class base {
    constructor(a, b, c) {
        assertEq(a, 1);
        assertEq(b, 2);
        assertEq(c, 3);
        this.calledBase = true;
    }
}

class doTest extends base {
    constructor(arr) {
        super(...arr);
    }
}

assertEq(new doTest([1,2,3]).calledBase, true);

class testRest extends base {
   constructor(...args) {
       super(...args);
   }
}

assertEq(new testRest(1,2,3).calledBase, true);

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
