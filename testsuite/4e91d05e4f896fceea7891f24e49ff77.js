load("201224b0d1c296b45befd2285e95dd42.js");
// For-of passes one arg to "next".

load("e2c808509c360663d6364e14c187fc8f.js")

var log = '';

function Iter() {
    function next() {
        log += 'n';
        assertEq(arguments.length, 0)
        assertEq(arguments[0], undefined)
        return { get value() { throw 42; }, done: true }
    }

    this[Symbol.iterator] = function () { return this; }
    this.next = next;
}

for (var x of new Iter())
    throw 'not reached';

assertEq(log, 'n');
