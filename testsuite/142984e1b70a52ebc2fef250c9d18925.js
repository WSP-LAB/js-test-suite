load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
// |reftest| skip
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributors: Jan de Mooij
 */

Object.preventExtensions(this);
delete Function;

try {
    /* Don't assert. */
    Object.getOwnPropertyNames(this);
} catch(e) {
    reportCompare(true, false, "this shouldn't have thrown");
}
reportCompare(0, 0, "ok");

