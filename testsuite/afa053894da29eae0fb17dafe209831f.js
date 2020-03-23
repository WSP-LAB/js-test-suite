load("8b38e12cab5de21ec5393724c0d9b7dd.js");
//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

WScript.LoadScriptFile("dc12371bf414696a113c371a90d0997a.js", "self");

var tests = {
  test01: {
    name: "Check that Enumerator is allowed for HostType = Web View",
    body: function () {
      var arr = ["x", "y"];
      var enu = new Enumerator(arr);
      for (enu.moveFirst(); !enu.atEnd(); enu.moveNext()) helpers.writeln(enu.item());
    }
  },
};

testRunner.runTests(tests);
