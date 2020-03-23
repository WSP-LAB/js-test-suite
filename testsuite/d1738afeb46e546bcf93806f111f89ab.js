load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

function str() {
  return new String("foo");
}

assertEq(testLenientAndStrict('var s = str(); s.length = 1; s.length',
                              returns(3), raisesException(TypeError)),
         true);
assertEq(testLenientAndStrict('var s = str(); delete s.length',
                              returns(false), raisesException(TypeError)),
         true);

assertEq(testLenientAndStrict('"foo".length = 1',
                              returns(1), raisesException(TypeError)),
         true);
assertEq(testLenientAndStrict('delete "foo".length',
                              returns(false), raisesException(TypeError)),
         true);

reportCompare(true, true);
