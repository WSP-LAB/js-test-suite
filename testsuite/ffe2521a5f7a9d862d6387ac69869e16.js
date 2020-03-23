load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("45e1d6de6cbdd6f2ea33d472d566096a.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

//-----------------------------------------------------------------------------
var BUGNUMBER = 289094;
var summary = 'argument shadowing function property special case for lambdas';
var actual = '';
var expect = 'function:function';

printBugNumber(BUGNUMBER);
printStatus (summary);
 
function fn()
{
  var o = {
    d: function(x,y) {},
    init: function() { this.d.x = function(x) {}; this.d.y = function(y) {}; }
  };
  o.init();
  actual = typeof(o.d.x) + ':' + typeof(o.d.y);
}

fn();

reportCompare(expect, actual, summary);
