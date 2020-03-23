load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("41e6217a79cd5540df13626a4eafe149.js");
// The first call to yield* passes one arg to "next".

function Iter() {
    function next() {
        if (arguments.length != 1)
            throw Error;
        return { value: 42, done: true }
    }

    this.next = next;
    this[Symbol.iterator] = function () { return this; }
}

function* delegate(iter) { return yield* iter; }

var iter = delegate(new Iter());
assertDeepEq(iter.next(), {value:42, done:true});

if (typeof reportCompare == "function")
    reportCompare(true, true);
