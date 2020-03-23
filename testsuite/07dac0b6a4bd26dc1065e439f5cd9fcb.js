load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("bcb77b03ed13784489484535627fca54.js");
var objects = [
    Math.sin.bind(null),
    new Proxy(Math.sin.bind(null), {}),
    Function.prototype.bind.call(new Proxy(Math.sin, {}))
]

for (var obj of objects) {
    // Target is not constructable, so a new array should be created internally.
    assertDeepEq(Array.from.call(obj, [1, 2, 3]), [1, 2, 3]);
    assertDeepEq(Array.of.call(obj, 1, 2, 3), [1, 2, 3]);

    // Make sure they are callable, but not constructable.
    obj();
    assertThrowsInstanceOf(() => new obj, TypeError);
}

reportCompare(0, 0, 'ok');
