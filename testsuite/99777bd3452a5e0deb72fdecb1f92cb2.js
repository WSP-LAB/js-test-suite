// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


load("a79651e60a4dad15fd7dad790f71e048.js");
load("5076a47baffe66db8d3b2f0f3844cb93.js");
load("ddaf140989b6babeb51c98c5c3ac1fd4.js");


var success = true;

function PrintResult(name, result) {
  print(name + '-Classes(Score): ' + result);
}


function PrintError(name, error) {
  PrintResult(name, error);
  success = false;
}


BenchmarkSuite.config.doWarmup = undefined;
BenchmarkSuite.config.doDeterministic = undefined;

BenchmarkSuite.RunSuites({ NotifyResult: PrintResult,
                           NotifyError: PrintError });
