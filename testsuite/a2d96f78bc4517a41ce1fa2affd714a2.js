load("201224b0d1c296b45befd2285e95dd42.js");
// Test that each yield* loop just checks "done", and "value" is only
// fetched once at the end.

load("e2c808509c360663d6364e14c187fc8f.js");

var log = "";

function Iter(val, count) {
    function next() {
        return {
            get done() { log += "d"; return count-- == 0; },
            get value() { log += "v"; return val; }
        }
    }

    this[Symbol.iterator] = function() { return this; };
    this.next = next;
}

for (var x of new Iter(42, 5))
    assertEq(x, 42);

assertEq(log, "dvdvdvdvdvd");
