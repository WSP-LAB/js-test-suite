load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 313938;
var summary = 'Root access in jsscript.c';
var actual = '';
var expect = '';

printBugNumber(BUGNUMBER);
printStatus (summary);

if (typeof Script == 'undefined')
{
  print('Test skipped. Script not defined.');
  reportCompare("Script not defined, Test skipped.",
                "Script not defined, Test skipped.",
                summary);
}
else
{
  var str = " 2;".substring(1);
  "1".substring(2);
  expect = Script.prototype.compile(str).toSource();

  var likeString = {
    toString: function() {
      var tmp = str;
      str = null;
      return tmp;
    }
  };

  TWO = 2.0;

  var likeObject = {
    valueOf: function() {
      if (typeof gc == "function")
        gc();
      for (var i = 0; i != 40000; ++i) {
        var tmp = 1e100 * TWO;
      }
      return this;
    }
  }

  var s = Script.prototype.compile(likeString, likeObject);
  var actual = s.toSource();
  printStatus(expect === actual);

  reportCompare(expect, actual, summary);
}
