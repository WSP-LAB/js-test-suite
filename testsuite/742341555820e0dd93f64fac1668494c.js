load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 465013;
var summary = '';
var actual = '';
var expect = '';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);
 
  expect = 'bgcolor="dummy" quality="dummy" allowScriptAccess="dummy" ';


  print((function(x) {
        var ja = "";
        var ka = {bgcolor:"#FFFFFF", quality:"high", allowScriptAccess:"always"};
        for (var la in ka) {
          ja +=[la] + "=\"" + x/*ka[la]*/ + "\" ";
        }
        return actual = ja;
      })("dummy"));


  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
