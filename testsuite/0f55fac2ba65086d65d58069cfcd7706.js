load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
load("008eabf74323023a3b4794d71c356b14.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var gTestfile = 'trailing-comma.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 564621;
var summary = 'JSON.parse should reject {"a" : "b",} or [1,]';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

testJSON('[]', false);
testJSON('[1]', false);
testJSON('["a"]', false);
testJSON('{}', false);
testJSON('{"a":1}', false);
testJSON('{"a":"b"}', false);
testJSON('{"a":true}', false);
testJSON('[{}]', false);

testJSON('[1,]', true);
testJSON('["a",]', true);
testJSON('{,}', true);
testJSON('{"a":1,}', true);
testJSON('{"a":"b",}', true);
testJSON('{"a":true,}', true);
testJSON('[{,}]', true);
testJSON('[[1,]]', true);
testJSON('[{"a":"b",}]', true);
