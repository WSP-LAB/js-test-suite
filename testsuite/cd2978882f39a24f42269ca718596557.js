load("201224b0d1c296b45befd2285e95dd42.js");
// An array iterator for a proxy calls the traps in a predictable order.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");
load("e2c808509c360663d6364e14c187fc8f.js");

var s = '';

var handler = {
    get: function (recipient, name) {
        if (name == 'length') {
            s += 'L';
            return 2;
        } else {
            s += name;
            return name;
        }
    }
};

var it = Array.prototype[Symbol.iterator].call(new Proxy([0, 1], handler));

assertIteratorNext(it, "0");
s += ' ';
assertIteratorNext(it, "1");
s += ' ';
assertIteratorDone(it, undefined);
assertEq(s, "L0 L1 L");

s = '';
var ki = Array.prototype.keys.call(new Proxy([0, 1], handler));

assertIteratorNext(ki, 0);
s += ' ';
assertIteratorNext(ki, 1);
s += ' ';
assertIteratorDone(ki, undefined);
assertEq(s, "L L L");

s = '';
var ei = Array.prototype.entries.call(new Proxy([0, 1], handler));

assertIteratorNext(ei, [0, "0"]);
s += ' ';
assertIteratorNext(ei, [1, "1"]);
s += ' ';
assertIteratorDone(ei, undefined);
assertEq(s, "L0 L1 L");
