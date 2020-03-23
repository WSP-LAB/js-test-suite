load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that Intl.Collator.prototype is an object that
 * has been initialized as an Intl.Collator.
 */

// test by calling a function that would fail if "this" were not an object
// initialized as an Intl.Collator
if (Intl.Collator.prototype.compare("aаあ아", "aаあ아") !== 0) {
    $ERROR("Intl.Collator.prototype is not an object that has been " +
        "initialized as an Intl.Collator.");
}

