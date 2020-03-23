load("e9229e434835e44850f2abee613bc307.js");
load("6b63254b0839f56fc10760caf93c8b3c.js");
load("976e6b31b3e5e8cb8fd712a37c003825.js");
// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

let compatConstructors = [
  {c: Intl.DateTimeFormat, m: "format"},
  {c: Intl.NumberFormat, m: "format"},
];

for (let {c, m} of compatConstructors) {
  let i = Object.create(c.prototype);
  assertTrue(i instanceof c);
  assertThrows(() => i[m], TypeError);
  assertEquals(i, c.call(i));
  assertEquals(i[m], i[m]);
  assertTrue(i instanceof c);

  for ({c: c2, m: m2} of compatConstructors) {
    if (c2 === c)  {
      assertThrows(() => c2.call(i), TypeError);
    } else {
      let i2 = c2.call(i);
      assertTrue(i2 != i);
      assertFalse(i2 instanceof c);
      assertTrue(i2 instanceof c2);
      assertEquals(i2[m2], i2[m2]);
    }
  }
}

let noCompatConstructors = [
  {c: Intl.Collator, m: "compare"},
  {c: Intl.v8BreakIterator, m: "next"},
];

for (let {c, m} of noCompatConstructors) {
  let i = Object.create(c.prototype);
  assertTrue(i instanceof c);
  assertThrows(() => i[m], TypeError);
  let i2 = c.call(i);
  assertTrue(i2 != i);
  assertEquals('function', typeof i2[m]);
  assertTrue(i2 instanceof c);
}

load("ad44e9798916912c175677b559081daf.js");
