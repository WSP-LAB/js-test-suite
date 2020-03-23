load("e9229e434835e44850f2abee613bc307.js");
load("6b63254b0839f56fc10760caf93c8b3c.js");
load("976e6b31b3e5e8cb8fd712a37c003825.js");
// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function toSurrogatePair(c) {
  return String.fromCharCode(((c - 0x10000) >>> 10) & 0x3FF | 0xD800) +
         String.fromCharCode(c & 0x3FF | 0xDC00);
}

function testIdStart(c, is_id_start) {
  var source = "var " + toSurrogatePair(c);
  print(source);
  if (is_id_start) {
    assertDoesNotThrow(source);
  } else {
    assertThrows(source);
  }
}

function testIdPart(c, is_id_start) {
  var source = "var v" + toSurrogatePair(c);
  print(source);
  if (is_id_start) {
    assertDoesNotThrow(source);
  } else {
    assertThrows(source);
  }
}

[0x10403, 0x1043C, 0x16F9C, 0x10048, 0x1014D].forEach(function(c) {
  testIdStart(c, true);
  testIdPart(c, true);
});

[0x101FD, 0x11002, 0x104A9].forEach(function(c) {
  testIdStart(c, false);
  testIdPart(c, true);
});

[0x10111, 0x1F4A9].forEach(function(c) {
  testIdStart(c, false);
  testIdPart(c, false);
});

load("ad44e9798916912c175677b559081daf.js");
