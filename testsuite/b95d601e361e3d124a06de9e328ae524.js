load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
load("68b329da9893e34099c7d8ad5cb9c940.js");
// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that Intl.NumberFormat.prototype.format
 * formats percent values properly.
 * @author: Roozbeh Pournader
 */

var numberFormatter = new Intl.NumberFormat();
var percentFormatter = new Intl.NumberFormat(undefined, {style: 'percent'});

var formattedTwenty = numberFormatter.format(20);
var formattedTwentyPercent = percentFormatter.format(0.20);

// FIXME: May not work for some theoretical locales where percents and
// normal numbers are formatted using different numbering systems.
if (formattedTwentyPercent.indexOf(formattedTwenty) === -1) {
    $ERROR("Intl.NumberFormat's formatting of 20% does not include a " +
        "formatting of 20 as a substring.");
}

// FIXME: Move this to somewhere appropriate
if (percentFormatter.format(0.011) === percentFormatter.format(0.02)) {
    $ERROR('Intl.NumberFormat is formatting 1.1% and 2% the same way.');
}

