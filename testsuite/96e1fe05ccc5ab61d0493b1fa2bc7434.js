load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("cf9772e2024f54f8b1f8a31901aa72c6.js");
/* Make sure that the default derived class constructor has the required spread semantics.
 *
 * Test credit André Bargull
 */

Array.prototype[Symbol.iterator] = function*() { yield 1; yield 2; };

class Base {
    constructor(a, b) {
        assertEq(a, 1);
        assertEq(b, 2);
    }
};
class Derived extends Base {};

new Derived();

if (typeof reportCompare === 'function')
    reportCompare(0,0,"OK");
