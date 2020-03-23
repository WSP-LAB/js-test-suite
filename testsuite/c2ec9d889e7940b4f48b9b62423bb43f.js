load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 4 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

(function (y) {
    arguments.y = 2;
    var x = Object.create(arguments);
    x[0] = 3;
    assertEq(x[0], 3);
    assertEq(x.y, 2);
    assertEq(y, 1);
})(1);

reportCompare(0, 0, 'ok');
