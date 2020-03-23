load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("b838f1585aea1338f85dfef2026aaa95.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// The colon for a labeled statement may be on a separate line.
var x;
label
: {
    x = 1;
    break label;
    x = 2;
}
assertEq(x, 1);
reportCompare(0, 0, 'ok');
