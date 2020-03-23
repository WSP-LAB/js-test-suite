load("e9229e434835e44850f2abee613bc307.js");
load("6b63254b0839f56fc10760caf93c8b3c.js");
load("976e6b31b3e5e8cb8fd712a37c003825.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var options = Intl.DateTimeFormat("ar-u-ca-islamic-civil").resolvedOptions();
assertEquals(options.calendar, "islamic-civil");

options = Intl.DateTimeFormat("ar-u-ca-islamic-umalqura").resolvedOptions();
assertEquals(options.calendar, "islamic-umalqura");

var options = Intl.DateTimeFormat("ar-u-ca-islamic-civil").resolvedOptions();
assertEquals(options.calendar, "islamic-civil");

options =
    Intl.DateTimeFormat("ar-u-ca-islamic-civil-nu-arab").resolvedOptions();
assertEquals(options.calendar, "islamic-civil");
assertEquals(options.numberingSystem, "arab");

// The default numberingSystem is 'arab' for 'ar' locale. Set it to 'latn'
// to check that 'nu-latn' keyword is parsed correctly.
options =
    Intl.DateTimeFormat("ar-u-ca-islamic-civil-nu-latn").resolvedOptions();
assertEquals(options.calendar, "islamic-civil");
assertEquals(options.numberingSystem, "latn");

// ethioaa is the canonical LDML/BCP 47 name.
options = Intl.DateTimeFormat("am-u-ca-ethiopic-amete-alem").resolvedOptions();
assertEquals(options.calendar, "ethioaa");

// Invalid calendar type "foo-bar". Fall back to the default.
options = Intl.DateTimeFormat("ar-u-ca-foo-bar").resolvedOptions();
assertEquals(options.calendar, "gregory");

// No type subtag for ca. Fall back to the default.
options = Intl.DateTimeFormat("ar-u-ca-nu-arab").resolvedOptions();
assertEquals(options.calendar, "gregory");

// Too long a type subtag for ca.
assertThrows(() => Intl.DateTimeFormat("ar-u-ca-foobarbaz"), RangeError);

load("ad44e9798916912c175677b559081daf.js");
