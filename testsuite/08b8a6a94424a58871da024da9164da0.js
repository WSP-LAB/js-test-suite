load("e9229e434835e44850f2abee613bc307.js");
load("6b63254b0839f56fc10760caf93c8b3c.js");
load("976e6b31b3e5e8cb8fd712a37c003825.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Calling Intl methods with a bad receiver throws a TypeError

// An uninitialized object of the same type
assertThrows(() => Object.create(Intl.DateTimeFormat.prototype).format(),
             TypeError);
assertThrows(() => Object.create(Intl.NumberFormat.prototype).format(),
             TypeError);
assertThrows(() => Object.create(Intl.Collator.prototype).compare(),
             TypeError);
assertThrows(() => Object.create(Intl.v8BreakIterator.prototype).adoptText(),
             TypeError);
assertThrows(() => Object.create(Intl.v8BreakIterator.prototype).first(),
             TypeError);
assertThrows(() => Object.create(Intl.v8BreakIterator.prototype).next(),
             TypeError);
assertThrows(() => Object.create(Intl.v8BreakIterator.prototype).current(),
             TypeError);
assertThrows(() => Object.create(Intl.v8BreakIterator.prototype).breakType(),
             TypeError);

// Or similarly, just accessing the method getter on the prototype
assertThrows(() => Intl.DateTimeFormat.prototype.format, TypeError);
assertThrows(() => Intl.NumberFormat.prototype.format, TypeError);
assertThrows(() => Intl.Collator.prototype.compare, TypeError);
assertThrows(() => Intl.v8BreakIterator.prototype.adoptText, TypeError);
assertThrows(() => Intl.v8BreakIterator.prototype.first, TypeError);
assertThrows(() => Intl.v8BreakIterator.prototype.next, TypeError);
assertThrows(() => Intl.v8BreakIterator.prototype.current, TypeError);
assertThrows(() => Intl.v8BreakIterator.prototype.breakType, TypeError);

// The method .call'd on a different instance will have that
// other instance benignly ignored, since it's a bound function
let nf = Intl.NumberFormat();
let df = Intl.DateTimeFormat();
assertEquals("0", nf.format.call(df, 0));

load("ad44e9798916912c175677b559081daf.js");
