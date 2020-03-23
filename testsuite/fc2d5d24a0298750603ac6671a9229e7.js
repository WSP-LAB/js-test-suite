load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function attach() {
  return new Promise(r => WScript.Attach(() => {
    r();
  }));
}
function detach() {
  return new Promise(r => WScript.Detach(() => {
    r();
  }));
}

const ccx = WScript.LoadScriptFile("cd02ab8e5078316920d99b08d73d10c9.js", "samethread");
let exports;
function createModule() {
  exports = ccx.createModule();
}
function run() {
  ccx.runTests(exports);
}

createModule();
run();
attach()
  .then(createModule)
  .then(detach)
  .then(run)
  .then(attach)
  .then(createModule)
  .then(run)
  .then(detach)
  .then(() => print("PASSED"), print);
