load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Construct typed array from iterable packed array, array contains object with modifying
// valueOf() method.
for (let constructor of anyTypedArrayConstructors) {
    let array = [
      0, 1, {valueOf() { array[3] = 30; return 2; }}, 3, 4
    ];
    let typedArray = new constructor(array);
    assertEq(typedArray.length, array.length);
    assertEqArray(typedArray, [0, 1, 2, 3, 4]);
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
