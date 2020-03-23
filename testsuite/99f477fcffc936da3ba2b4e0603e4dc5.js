load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

for (let primitive of [true, 3.14, "hello", Symbol()]) {
    let prototype = Object.getPrototypeOf(primitive);

    Object.defineProperty(prototype, Symbol.iterator, {
        configurable: true,
        get() {
            "use strict";
            assertEq(this, primitive);
            return () => [this][Symbol.iterator]();
        },
    });
    assertEq(Array.from(primitive)[0], primitive);

    delete prototype[Symbol.iterator];
}

if (typeof reportCompare === 'function')
    reportCompare(0, 0);
