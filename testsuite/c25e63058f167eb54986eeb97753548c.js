load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2013 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/**
 * @description Tests that String.prototype.localeCompare treats a missing
 *     "that" argument, undefined, and "undefined" as equivalent.
 * @author Norbert Lindenberg
 */

var thisValues = ["a", "t", "u", "undefined", "UNDEFINED", "nicht definiert", "xyz", "未定义"];

var i;
for (i = 0; i < thisValues.length; i++) {
    var thisValue = thisValues[i];
    if (thisValue.localeCompare() !== thisValue.localeCompare(undefined)) {
        $ERROR("String.prototype.localeCompare does not treat missing 'that' argument as undefined.");
    }
    if (thisValue.localeCompare(undefined) !== thisValue.localeCompare("undefined")) {
        $ERROR("String.prototype.localeCompare does not treat undefined 'that' argument as \"undefined\".");
    }
}

