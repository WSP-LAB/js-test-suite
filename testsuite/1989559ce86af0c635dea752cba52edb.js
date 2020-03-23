load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
// |reftest| skip -- obsolete test
/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


test();

function test()
{
  enterFunc ("test");

  printStatus ("Unicode format-control character (Category Cf) test.");
  printBugNumber (23610);

  reportCompare ("no error", eval('"no\u200E error"'),
		 "Unicode format-control character test (Category Cf.)");
   
  exitFunc ("test");
}
