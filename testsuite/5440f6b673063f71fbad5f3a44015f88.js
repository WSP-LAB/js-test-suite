load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");

var F, o;

F = function () {};
F.prototype = new ArrayBuffer(1);
o = new F();
try {
    o.byteLength;
} catch (ex) {
    // o is not a platform object
    assertEq(ex instanceof TypeError, true);
}

o = {};
o.__proto__ = new Int32Array(1);
try {
    o.buffer.byteLength;
} catch (ex) {
    // o is not a platform object
    assertEq(ex instanceof TypeError, true);
}

F = function () {};
F.prototype = new Int32Array(1);
o = new F();
try {
    o.slice(0, 1);
    reportFailure("Expected an exception!");
} catch (ex) {
}

reportCompare("ok", "ok", "bug 571014");
