// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


load("a79651e60a4dad15fd7dad790f71e048.js");
load("472315d5854f8ed5a847497178fa653e.js");
load("956bf6046fcba3e61289b950412cb963.js");
load("c36c434690b0caa13f4d0808df73b2cc.js");
load("916ce5982df6bae7c9d4db5b3449942f.js");
load("6ca204cba1bc0baec70ab414bb4d6b5c.js");


var success = true;

function PrintResult(name, result) {
  print(name + '-Collections(Score): ' + result);
}


function PrintError(name, error) {
  PrintResult(name, error);
  success = false;
}


BenchmarkSuite.config.doWarmup = undefined;
BenchmarkSuite.config.doDeterministic = undefined;

BenchmarkSuite.RunSuites({ NotifyResult: PrintResult,
                           NotifyError: PrintError });
