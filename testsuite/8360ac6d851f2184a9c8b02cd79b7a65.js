load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("6541b3270fb9a4b0727a6347f747112c.js");
load("5afee0e092b556e09d8b52d91329d939.js");
// |reftest| skip-if(Android)
/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/* Check that assignment to a let-bound variable is permitted in both lenient and strict modes. */

/* Assigning to a let-declared variable is okay in strict and loose modes. */
assertEq(testLenientAndStrict('let let_declared; let_declared=1',
                              completesNormally,
                              completesNormally),
         true);

reportCompare(true, true);
