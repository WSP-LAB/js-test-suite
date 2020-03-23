load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("4453bc71711f2269cdbeb3fdd130078c.js");
function f(foo) {
    "use strict";
    foo.bar;
}

var actual;
try {
    f();
    actual = "no error";
} catch (x) {
    actual = (x instanceof TypeError) ? "type error" : "some other error";
    actual += (/use strict/.test(x)) ? " with directive" : " without directive";
}

reportCompare("type error without directive", actual,
              "decompiled expressions in error messages should not include directive prologues");
