load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
// Super property accesses should play nice with the pretty printer.
class testNonExistent {
    constructor() {
        super["prop"]();
    }
}
// Should fold to super.prop
assertThrownErrorContains(() => new testNonExistent(), 'super.prop');

var ol = { testNonExistent() { super.prop(); } };
assertThrownErrorContains(() => ol.testNonExistent(), "super.prop");

var olElem = { testNonExistent() { var prop = "prop"; super[prop](); } };
assertThrownErrorContains(() => olElem.testNonExistent(), "super[prop]");

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
