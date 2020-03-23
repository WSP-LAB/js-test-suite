load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("74295afcbe3851329365d06de2aa5a5e.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var gTestfile = 'regress-580544.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 580544;
var summary = 'Do not assert: new (this.prototype = this)';
var actual = 'No Crash';
var expect = 'No Crash';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);

  try {
    new (this.prototype = this);
  } catch (e) {
  }

  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
