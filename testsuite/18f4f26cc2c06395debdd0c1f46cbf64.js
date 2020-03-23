load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that objects constructed by Intl.DateTimeFormat have the specified internal properties.
 * @author Norbert Lindenberg
 */

var obj = new Intl.DateTimeFormat();

var actualPrototype = Object.getPrototypeOf(obj);
if (actualPrototype !== Intl.DateTimeFormat.prototype) {
    $ERROR("Prototype of object constructed by Intl.DateTimeFormat isn't Intl.DateTimeFormat.prototype; got " + actualPrototype);
}

if (!Object.isExtensible(obj)) {
    $ERROR("Object constructed by Intl.DateTimeFormat must be extensible.");
}

