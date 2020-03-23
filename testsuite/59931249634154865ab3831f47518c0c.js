// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


load("a79651e60a4dad15fd7dad790f71e048.js");

load("e79d68f5c335d7ae63120d1ba8354eba.js");
load("643fc6f9fbf48da6debde049121acbe2.js");
load("fc4c6f3c9b79869d0b6571190b0be7c0.js");
load("d561f1c8df65f37a1fe3d716844c063c.js");

var success = true;

function PrintResult(name, result) {
  print(name + '-Object(Score): ' + result);
}


function PrintError(name, error) {
  PrintResult(name, error);
  success = false;
}


BenchmarkSuite.config.doWarmup = undefined;
BenchmarkSuite.config.doDeterministic = undefined;

BenchmarkSuite.RunSuites({ NotifyResult: PrintResult,
                           NotifyError: PrintError });
