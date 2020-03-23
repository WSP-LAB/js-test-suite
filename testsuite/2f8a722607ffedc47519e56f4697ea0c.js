load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("2a038e91f6e5f6c7add968f0a7889dbd.js");
load("99af2c3994932cf7fcec8ec85c6dc330.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const TypedArray = Object.getPrototypeOf(Int32Array);

assertEq(TypedArray.length, 0);

assertDeepEq(Object.getOwnPropertyDescriptor(TypedArray, "length"), {
    value: 0, writable: false, enumerable: false, configurable: true,
});

if (typeof reportCompare === "function")
    reportCompare(0, 0);
