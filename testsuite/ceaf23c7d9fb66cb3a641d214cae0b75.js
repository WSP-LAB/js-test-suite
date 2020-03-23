load("e9229e434835e44850f2abee613bc307.js");
load("6b63254b0839f56fc10760caf93c8b3c.js");
load("976e6b31b3e5e8cb8fd712a37c003825.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

assertThrows(() => new Intl.getCanonicalLocales('en'), TypeError);

let collator = new Intl.Collator('en');
assertThrows(() => new collator.resolvedOptions(), TypeError);

assertThrows(() => new Intl.Collator.supportedLocalesOf('en'), TypeError);

let numberformat = new Intl.NumberFormat('en');
assertThrows(() => new numberformat.resolvedOptions(), TypeError);

assertThrows(() => new Intl.NumberFormat.supportedLocalesOf('en'), TypeError);

let datetimeformat = new Intl.DateTimeFormat('en');
assertThrows(() => new datetimeformat.resolvedOptions(), TypeError);
assertThrows(() => new datetimeformat.formatToParts(new Date()), TypeError);

assertThrows(() => new Intl.DateTimeFormat.supportedLocalesOf('en'), TypeError);

assertThrows(() => new "".localCompare(""), TypeError);

assertThrows(() => new "".normalize(), TypeError);
assertThrows(() => new "".toLocaleLowerCase(), TypeError);
assertThrows(() => new "".toLocaleUpperCase(), TypeError);
assertThrows(() => new "".toLowerCase(), TypeError);
assertThrows(() => new "".toUpperCase(), TypeError);

assertThrows(() => new 3..toLocaleString(), TypeError);
assertThrows(() => new (new Date()).toLocaleString(), TypeError);
assertThrows(() => new (new Date()).toLocaleDateString(), TypeError);
assertThrows(() => new (new Date()).toLocaleTimeString(), TypeError);

load("ad44e9798916912c175677b559081daf.js");
