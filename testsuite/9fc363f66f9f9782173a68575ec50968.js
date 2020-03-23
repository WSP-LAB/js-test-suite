load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that Intl.NumberFormat.prototype.constructor is the
 * Intl.NumberFormat.
 * @author: Roozbeh Pournader
 */

if (Intl.NumberFormat.prototype.constructor !== Intl.NumberFormat) {
    $ERROR("Intl.NumberFormat.prototype.constructor is not the same as " +
          "Intl.NumberFormat");
}

