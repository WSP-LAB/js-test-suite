load("201224b0d1c296b45befd2285e95dd42.js");
// String.prototype.iterator is generic.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");
load("b137ac1b406ee4ea5c586215eec1568c.js");

function test(obj) {
    var it = String.prototype[Symbol.iterator].call(obj);
    var s = String(obj);
    for (var i = 0, length = s.length; i < length;) {
        var r = s[i++];
        if (isHighSurrogate(r) && i < length && isLowSurrogate(s[i])) {
            r += s[i++];
        }
        assertIteratorNext(it, r);
    }
    assertIteratorDone(it, undefined);
}

test({toString: () => ""});
test({toString: () => "xyz"});
test({toString: () => "\ud808\udf45"});
test({valueOf: () => ""});
test({valueOf: () => "xyz"});
test({valueOf: () => "\ud808\udf45"});
