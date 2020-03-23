// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


load("a79651e60a4dad15fd7dad790f71e048.js");

load("368a5f987f25e9a641904ae1ff70ecd1.js");
load("209df67778790cf497a76c8575042b8c.js");
load("e1646fdaa6af01f4bae82fb27c9eb99d.js");
load("924578c72a7a258546e86feb94f18593.js");
load("96cf8a12ed3766b3df0e6fcba391fa0e.js");
load("2d1cdccee6ecd99aed2eb5f5f9063601.js");
load("3fe8be7ad1ecbe0700105f4356050ec6.js");
load("ea35b5f739dc061303bef12d149c75ef.js");
load("0692d66523b11410c8de2a97eb723807.js");
load("22b7593a948f0363d225c210ed882de4.js");
load("289ebada7a4c998ad40212ab433cdbc7.js");
load("afdb41300e08c648fd6e2610e37e86a2.js");
load("05fe0c10a1f74ddf8a175b5a37564821.js");
load("cdc453b5a78f681c29deb4821f34ca8f.js");
load("bf02bae038907b998af73f8271573cab.js");

var success = true;

function PrintResult(name, result) {
  print(name + '-RegExp(Score): ' + result);
}


function PrintError(name, error) {
  PrintResult(name, error);
  success = false;
}


BenchmarkSuite.config.doWarmup = undefined;
BenchmarkSuite.config.doDeterministic = undefined;

BenchmarkSuite.RunSuites({ NotifyResult: PrintResult,
                           NotifyError: PrintError });
