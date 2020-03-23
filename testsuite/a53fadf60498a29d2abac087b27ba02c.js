load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

assertEq(new Error().hasOwnProperty('message'), false);
assertEq(new Error(undefined).hasOwnProperty('message'), false);

reportCompare(0, 0, 'ok');
