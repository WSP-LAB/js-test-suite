load("201224b0d1c296b45befd2285e95dd42.js");
// Deleting the .next method of an iterator in the middle of a for-of loop
// causes a TypeError at the next iteration.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

var iterProto = Object.getPrototypeOf([][Symbol.iterator]());
var s = '';
assertThrowsInstanceOf(function () {
    for (var v of ['duck', 'duck', 'duck', 'goose', 'FAIL']) {
        s += v;
        if (v === 'goose')
            delete iterProto.next;
        s += '.';
    }
}, TypeError);
assertEq(s, 'duck.duck.duck.goose.');
