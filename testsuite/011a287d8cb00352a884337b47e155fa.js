load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/**
 * @description Tests that Intl.DateTimeFormat.prototype has the required attributes.
 * @author Norbert Lindenberg
 */

var desc = Object.getOwnPropertyDescriptor(Intl.DateTimeFormat, "prototype");
if (desc === undefined) {
    $ERROR("Intl.DateTimeFormat.prototype is not defined.");
}
if (desc.writable) {
    $ERROR("Intl.DateTimeFormat.prototype must not be writable.");
}
if (desc.enumerable) {
    $ERROR("Intl.DateTimeFormat.prototype must not be enumerable.");
}
if (desc.configurable) {
    $ERROR("Intl.DateTimeFormat.prototype must not be configurable.");
}

