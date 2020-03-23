load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
load("41e6217a79cd5540df13626a4eafe149.js");
// Test that yield* can appear in a loop, and inside yield.

function* countdown(n) {
    while (n > 0) {
        yield (yield* countdown(--n));
    }
    return 34;
}

function collect_results(iter) {
    var ret = [];
    var result;
    do {
        result = iter.next();
        ret.push(result);
    } while (!result.done);
    return ret;
}

var expected = [
    // Only 34 yielded from the "yield" and the last return make it out.
    // Three yields in countdown(3), two in countdown(2), and one in
    // countdown(1) (called twice).
    {value: 34, done: false},
    {value: 34, done: false},
    {value: 34, done: false},
    {value: 34, done: false},
    {value: 34, done: false},
    {value: 34, done: false},
    {value: 34, done: false},
    {value: 34, done: true}, // final
];

assertDeepEq(collect_results(countdown(3)), expected);

if (typeof reportCompare == "function")
    reportCompare(true, true);
