load("201224b0d1c296b45befd2285e95dd42.js");
// Iterating over non-iterable values throws a TypeError.

load("19d7bc83becec11ee32c3a85fbc4d93d.js");

var misc = [
    {}, {x: 1}, Math, isNaN,
    Object.create(null),
    null, undefined,
    true, 0, 3.1416,
    new Boolean(true), new Number(0),
    {iterator: function () { return undefined; }},
    {iterator: function () { return null; }},
    {iterator: function () { return true; }},
    {iterator: function () { return 17; }},
];

for (var i = 0; i < misc.length; i++) {
    let v = misc[i];
    var testfn = function () {
        for (var _ of v)
            throw 'FAIL';
        throw 'BAD';
    };
    assertThrowsInstanceOf(testfn, TypeError);
}
