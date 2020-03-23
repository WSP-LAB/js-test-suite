load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var a = {p0: function () {}};
var b = /f/;
b.__proto__ = a;
b.watch("p0", function () {});
b.p0;

reportCompare(0, 0, "ok");
