load("e9229e434835e44850f2abee613bc307.js");
load("6b63254b0839f56fc10760caf93c8b3c.js");
load("976e6b31b3e5e8cb8fd712a37c003825.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --datetime-format-to-parts

var d = new Date(2016, 11, 15, 14, 10, 34);
var df = Intl.DateTimeFormat("ja",
    {hour: 'numeric', minute: 'numeric', second: 'numeric', year: 'numeric',
     month: 'numeric', day: 'numeric', timeZoneName: 'short', era: 'short'});

var formattedParts = df.formatToParts(d);

var formattedReconstructedFromParts = formattedParts.map((part) => part.value)
    .reduce((accumulated, part) => accumulated + part);
assertEquals(df.format(d), formattedReconstructedFromParts);
// 西暦2016年11月15日 14:10:34 GMT-7
assertEquals(["era", "year", "literal", "month", "literal", "day", "literal",
              "hour", "literal", "minute", "literal", "second", "literal",
              "timeZoneName"], formattedParts.map((part) => part.type));

load("ad44e9798916912c175677b559081daf.js");
