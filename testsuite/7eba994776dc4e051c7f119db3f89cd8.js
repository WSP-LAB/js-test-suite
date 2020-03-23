load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2013 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/**
 * @description Tests that Intl has Object.prototype as its prototype.
 * @author Norbert Lindenberg
 */

if (Object.getPrototypeOf(Intl) !== Object.prototype) {
    $ERROR("Intl doesn't have Object.prototype as its prototype.");
}

