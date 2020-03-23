// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

load("89a497f4c50921c3a2122c5c3ffac2ab.js");

var str;
var re;

function SimpleTest() {
  re.test(str);
}

function Test1Setup() {
  re = /[Cz]/;
  str = createHaystack();
}

function Test2Setup() {
  re = /[cZ]/;  // Not found.
  str = createHaystack();
}

var benchmarks = [ [SimpleTest, Test1Setup],
                   [SimpleTest, Test2Setup],
                 ];
