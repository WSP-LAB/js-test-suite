load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 4 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


DESCRIPTION = "Non-character escapes in identifiers negative test.";
EXPECTED = "error";

enterFunc ("test");

printStatus ("Non-character escapes in identifiers negative test.");
printBugNumber (23607);

eval("\u0020 = 5");
reportCompare('PASS', 'FAIL', "Previous statement should have thrown an error.");

exitFunc ("test");

