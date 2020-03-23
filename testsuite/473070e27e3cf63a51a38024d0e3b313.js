load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
// Contributors: Christian Holler <decoder@own-hero.net>, Jesse Ruderman <jruderman@gmail.com>

(1 ? 2 : delete(0 ? 0 : {})).x;

reportCompare(0, 0, 'ok');
