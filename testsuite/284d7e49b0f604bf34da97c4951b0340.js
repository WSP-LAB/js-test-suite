load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
load("008eabf74323023a3b4794d71c356b14.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var gTestfile = 'small-codepoints.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 554079;
var summary = 'JSON.parse should reject U+0000 through U+001F';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

for (var i = 0; i <= 0x1F; i++)
  testJSON('["a' + String.fromCharCode(i) + 'c"]', true);
