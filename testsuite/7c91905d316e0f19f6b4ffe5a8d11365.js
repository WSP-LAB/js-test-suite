load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
// |reftest| skip-if(!xulRuntime.shell)
// -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 4 -*-
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

function testRegExp(b, c=b) {
    var a = deserialize(serialize(b));
    assertEq(a === b, false);
    assertEq(Object.getPrototypeOf(a), RegExp.prototype);
    assertEq(Object.prototype.toString.call(a), "[object RegExp]");
    for (p in a)
        throw new Error("cloned RegExp should have no enumerable properties");

    assertEq(a.source, c.source);
    assertEq(a.global, c.global);
    assertEq(a.ignoreCase, c.ignoreCase);
    assertEq(a.multiline, c.multiline);
    assertEq(a.sticky, c.sticky);
    assertEq("expando" in a, false);
}

testRegExp(RegExp(""));
testRegExp(/(?:)/);
testRegExp(/^(.*)$/gimy);

var re = /\bx\b/gi;
re.expando = true;
testRegExp(re);
// `source` and the flag accessors are defined on RegExp.prototype, so they're
// not available after re.__proto__ has been changed. We solve that by passing
// in an additional copy of the same RegExp to compare the
// serialized-then-deserialized clone with."
re.__proto__ = {};
testRegExp(re, /\bx\b/gi);

reportCompare(0, 0, 'ok');
