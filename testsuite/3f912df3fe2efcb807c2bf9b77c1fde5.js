load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Construct typed array from object with non-callable [Symbol.iterator] property.
for (let constructor of anyTypedArrayConstructors) {
    for (let iterator of [true, 0, Math.PI, "", "10", Symbol.iterator, {}, []]) {
        assertThrowsInstanceOf(() => new constructor({
            [Symbol.iterator]: iterator
        }), TypeError);
    }
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
