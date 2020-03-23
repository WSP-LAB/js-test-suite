load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
class base {
    constructor() { }
}

let seenValues;
Object.defineProperty(base.prototype, "minutes",
                      {
                        set(x) {
                            assertEq(x, 525600);
                            seenValues.push(x);
                        }
                      });
Object.defineProperty(base.prototype, "intendent",
                      {
                        set(x) {
                            assertEq(x, "Fred");
                            seenValues.push(x)
                        }
                      });

const testArr = [525600, "Fred"];
class derived extends base {
    constructor() { super(); }
    prepForTest() { seenValues = []; }
    testAsserts() { assertDeepEq(seenValues, testArr); }
    testProps() {
        this.prepForTest();
        [super.minutes, super.intendent] = testArr;
        this.testAsserts();
    }
    testElems() {
        this.prepForTest();
        [super["minutes"], super["intendent"]] = testArr;
        this.testAsserts();
    }
}

let d = new derived();
d.testProps();
d.testElems();

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
