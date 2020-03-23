load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2011-2012 Norbert Lindenberg. All rights reserved.
// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that Intl.Collator can be subclassed.
 * @author Norbert Lindenberg
 */

$INCLUDE("3bd8fde197e9106a216a7e98b929475a.js");

// get a collator and have it sort an array for comparison with the subclass
var locales = ["tlh", "id", "en"];
var a = ["A", "C", "E", "B", "D", "F"];
var referenceCollator = new Intl.Collator(locales);
var referenceSorted = a.slice().sort(referenceCollator.compare);

function MyCollator(locales, options) {
    Intl.Collator.call(this, locales, options);
    // could initialize MyCollator properties
}

MyCollator.prototype = Object.create(Intl.Collator.prototype);
MyCollator.prototype.constructor = MyCollator;
// could add methods to MyCollator.prototype

var collator = new MyCollator(locales);
a.sort(collator.compare);
testArraysAreSame(referenceSorted, a);

