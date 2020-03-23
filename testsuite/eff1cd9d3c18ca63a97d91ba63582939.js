load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("1b3dbc1cddb6b5cc8ace501cab6be659.js");
// |reftest| skip-if(!xulRuntime.shell)
// -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 4 -*-
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

function testEq(b) {
    var a = deserialize(serialize(b));
    assertEq(a, b);
}

testEq(void 0);
testEq(null);

testEq(true);
testEq(false);

testEq(0);
testEq(-0);
testEq(1/0);
testEq(-1/0);
testEq(0/0);
testEq(Math.PI);

testEq("");
testEq("\0");
testEq("a");  // unit string
testEq("ab");  // length-2 string
testEq("abc\0123\r\n");  // nested null character
testEq("\xff\x7f\u7fff\uffff\ufeff\ufffe");  // random unicode stuff
testEq("\ud800 \udbff \udc00 \udfff"); // busted surrogate pairs
testEq(Array(1024).join(Array(1024).join("x")));  // 2MB string

reportCompare(0, 0, 'ok');
