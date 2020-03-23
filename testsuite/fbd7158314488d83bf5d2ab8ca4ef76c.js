load("201224b0d1c296b45befd2285e95dd42.js");
// Array.prototype.iterator is generic.
// That is, it can be applied to arraylike objects and strings, not just arrays.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

function test(obj) {
    var it = Array.prototype[Symbol.iterator].call(obj);
    var ki = Array.prototype.keys.call(obj);
    var ei = Array.prototype.entries.call(obj);
    for (var i = 0; i < (obj.length >>> 0); i++) {
        assertIteratorNext(it, obj[i]);
        assertIteratorNext(ki, i);
        assertIteratorNext(ei, [i, obj[i]]);
    }
    assertIteratorDone(it, undefined);
    assertIteratorDone(ki, undefined);
    assertIteratorDone(ei, undefined);
}

test({length: 0});
test({length: 0, 0: 'x', 1: 'y'});
test({length: 2, 0: 'x', 1: 'y'});
test(Object.create(['x', 'y', 'z']));
test(Object.create({length: 2, 0: 'x', 1: 'y'}));
test("");
test("ponies");

// Perverse length values.
test({length: "011", 9: 9, 10: 10, 11: 11});
test({length: -0});
test({length: 2.7, 0: 0, 1: 1, 2: 2});
test({length: {valueOf: function () { return 3; }}, 0: 0, 1: 1, 2: 2});
