load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*
 * NB: this test hardcodes for the value of PropertyTable::HASH_THRESHOLD (6).
 */

function s(e) {
  var a, b, c, d;
  function e() { }
}

reportCompare(0, 0, "don't crash");
