load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
class testForIn {
    constructor() {
        let hits = 0;
        for (super.prop in { prop1: 1, prop2: 2 })
            hits++;
        assertEq(this.prop, "prop2");
        assertEq(hits, 2);
    }
}

new testForIn();


({
    testForOf() {
        let hits = 0;
        for (super["prop"] of [1, 2])
            hits++;
        assertEq(this.prop, 2);
        assertEq(hits, 2);
    }
}).testForOf();

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
