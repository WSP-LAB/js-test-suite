load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
/* -*- indent-tabs-mode: nil; js-indent-level: 4 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var expect, actual;

var obj = {
    f: function() {
        expect = this.g;
        actual = arguments.callee.caller;
        print("Ok");
    }
};

var obj2 = { __proto__: obj, g: function() { this.f(); }};

var obj3 = { __proto__: obj2, h: function() { this.g(); }};

var obj4 = { __proto__: obj3 }

obj4.h();

reportCompare(expect, actual, "ok");
