load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*
 * 'with' statements are forbidden in strict top-level code. This is
 * eval code, but that's close enough.
 */
assertEq(testLenientAndStrict('with (1) {}',
                              completesNormally,
                              raisesException(SyntaxError)),
         true);

/* 'with' statements are forbidden in strict function code. */
assertEq(testLenientAndStrict('function f() { "use strict"; with (1) {} }',
                              parseRaisesException(SyntaxError),
                              parseRaisesException(SyntaxError)),
         true);
                              
/*
 * A use strict directive in a function mustn't affect the strictness
 * of subsequent code.
 */
assertEq(parsesSuccessfully('function f() { "use strict"; }; with (1) {}'),
         true);

reportCompare(true, true);
