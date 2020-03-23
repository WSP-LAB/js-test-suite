// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


load("a79651e60a4dad15fd7dad790f71e048.js");
load("21bb48b97eea35a08d3a08fb79a4d7f1.js");
load("4e7e90ae425c3bc3827c8cb4df0f54d0.js");
load("2060bfc1e690b82eb2847ed009e82950.js");

var success = true;

function PrintResult(name, result) {
  print(name + '-AsyncAwait(Score): ' + result);
}


function PrintError(name, error) {
  PrintResult(name, error);
  success = false;
}


BenchmarkSuite.config.doWarmup = undefined;
BenchmarkSuite.config.doDeterministic = undefined;

BenchmarkSuite.RunSuites({ NotifyResult: PrintResult,
                           NotifyError: PrintError });
