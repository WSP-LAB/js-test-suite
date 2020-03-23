load("1d8ada728956c1a3d52d68d1d4d6dd52.js");
// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

let array = new Array(0xFFFFFFFF);
let it = array.keys();
assertEquals({ value: 0, done: false }, it.next());

it = array.entries();
assertEquals({ value: [0, undefined], done: false }, it.next());

it = array[Symbol.iterator]();
assertEquals({ value: undefined, done: false }, it.next());
