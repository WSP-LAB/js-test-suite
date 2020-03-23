load("201224b0d1c296b45befd2285e95dd42.js");
// Replacing Array.prototype.iterator with a generator affects for-of behavior.

load("e2c808509c360663d6364e14c187fc8f.js");

Array.prototype[Symbol.iterator] = function* () {
    for (var i = this.length; --i >= 0; )
        yield this[i];
};

var s = '';
for (var v of ['a', 'b', 'c', 'd'])
    s += v;
assertEq(s, 'dcba');
