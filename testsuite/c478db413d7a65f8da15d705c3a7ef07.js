load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that Intl.Collator instances have the specified properties.
 * @author Norbert Lindenberg
 */

var obj = new Intl.Collator();

var toStringValue = Object.prototype.toString.call(obj);
if (toStringValue !== "[object Object]") {
    $ERROR("Intl.Collator instance produces wrong [[Class]] - toString returns " + toStringValue + ".");
}

