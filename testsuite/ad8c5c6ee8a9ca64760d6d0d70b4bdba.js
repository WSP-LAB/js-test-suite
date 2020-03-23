load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("faa81dc98fc13338aca921d45eebae79.js");
// Copyright 2011 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path ch13/13.2/S13.2_A8_T1.js
 * @description check if "caller" poisoning poisons
 * "in" too
 * @onlyStrict
 */

"use strict";
'caller' in function() {};


