load("e9229e434835e44850f2abee613bc307.js");
load("6b63254b0839f56fc10760caf93c8b3c.js");
load("976e6b31b3e5e8cb8fd712a37c003825.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

let descriptor;

descriptor = Object.getOwnPropertyDescriptor(Intl.DateTimeFormat.prototype,
                                             Symbol.toStringTag);

assertEquals("Object", descriptor.value);
assertFalse(descriptor.writable);
assertFalse(descriptor.enumerable);
assertTrue(descriptor.configurable);

descriptor = Object.getOwnPropertyDescriptor(Intl.NumberFormat.prototype,
                                             Symbol.toStringTag);

assertEquals("Object", descriptor.value);
assertFalse(descriptor.writable);
assertFalse(descriptor.enumerable);
assertTrue(descriptor.configurable);

descriptor = Object.getOwnPropertyDescriptor(Intl.Collator.prototype,
                                             Symbol.toStringTag);

assertEquals("Object", descriptor.value);
assertFalse(descriptor.writable);
assertFalse(descriptor.enumerable);
assertTrue(descriptor.configurable);

load("ad44e9798916912c175677b559081daf.js");
