load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

WScript.LoadScriptFile("dc12371bf414696a113c371a90d0997a.js", "self");

var tests = {
  test01: {
    name: "Check that Enumerator is deprecated for HostType = Application",
    body: function () {
      assert.throws(
        function() {
          var arr = ["x", "y"];
          var enu = new Enumerator(arr);
        }, ReferenceError);
    }
  },
};

testRunner.runTests(tests);
