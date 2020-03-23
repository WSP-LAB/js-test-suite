load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

assertEq(testLenientAndStrict('"\\010"',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);

assertEq(testLenientAndStrict('"\\00"',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);

assertEq(testLenientAndStrict('"\\1"',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);

assertEq(testLenientAndStrict('"\\08"',
                              parsesSuccessfully,
                              parseRaisesException(SyntaxError)),
         true);

assertEq(testLenientAndStrict('"\\0"',
                              parsesSuccessfully,
                              parsesSuccessfully),
         true);

assertEq(testLenientAndStrict('"\\0x"',
                              parsesSuccessfully,
                              parsesSuccessfully),
         true);

reportCompare(true, true);
